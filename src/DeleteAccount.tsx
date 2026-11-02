import { useEffect, useRef, useState } from "react";

const API_BASE = "https://api.agrigati.com";

type Step = "mobile" | "otp" | "confirm" | "done";

function normalizeMobile(input: string): string | null {
  const digits = input.replace(/[^0-9]/g, "");
  // Accept 10-digit Indian numbers, optionally prefixed with 91.
  if (digits.length === 10) return digits;
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return null;
}

async function parseError(res: Response): Promise<string> {
  try {
    const body = await res.json();
    if (Array.isArray(body) && body.length > 0) {
      const first = body[0] as {
        message?: string;
        code?: string;
        errorMessage?: string;
        errorCode?: string;
      };
      // Backend returns [{errorCode, errorMessage, ...}]
      if (first?.errorMessage) return first.errorMessage;
      if (first?.message) return first.message;
      if (first?.errorCode) return first.errorCode;
      if (first?.code) return first.code;
    }
    if (typeof body === "object" && body !== null) {
      const obj = body as { message?: string; error?: string };
      if (obj.message) return obj.message;
      if (obj.error) return obj.error;
    }
  } catch {
    /* fall through to generic message */
  }
  if (res.status === 404) return "This mobile number is not registered with AgriGati.";
  return "Something went wrong. Please try again.";
}

export default function DeleteAccount() {
  const [step, setStep] = useState<Step>("mobile");
  const [mobileInput, setMobileInput] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [confirmText, setConfirmText] = useState("");
  const [ack, setAck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (cooldown <= 0) return;
    timer.current = window.setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [cooldown]);

  const sendOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const normalized = normalizeMobile(mobileInput);
    if (!normalized) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/otps`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: normalized, otpEvent: "DELETE_ACCOUNT" }),
      });
      if (!res.ok) throw new Error(await parseError(res));
      setMobile(normalized);
      setOtp("");
      setStep("otp");
      setCooldown(60);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.replace(/[^0-9]/g, "").length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/otps/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otpEvent: "DELETE_ACCOUNT", otp }),
      });
      if (!res.ok) throw new Error(await parseError(res));
      const body = (await res.json()) as { token?: string };
      if (!body.token) throw new Error("Verification failed. Please try again.");
      // Kept in memory only — never persisted to localStorage.
      setToken(body.token);
      setStep("confirm");
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    if (!token) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/users/me`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok && res.status !== 204) throw new Error(await parseError(res));
      setToken(null);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Account deletion failed.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-green-400/60";
  const btnCls =
    "w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100";

  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-200">
      <div className="max-w-xl mx-auto px-6 py-28 md:py-32">
        <a href="/" className="text-green-400 hover:text-green-300 text-sm">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Delete Account
        </h1>
        <p className="mt-4 text-gray-400 text-[15px] leading-relaxed">
          Verify your mobile number with an OTP to permanently delete your
          AgriGati account and personal data. This action cannot be undone.
        </p>

        {/* Progress */}
        {step !== "done" && (
          <div className="mt-8 flex items-center gap-2 text-xs font-semibold">
            {(["mobile", "otp", "confirm"] as Step[]).map((s, i) => {
              const labels = ["Mobile", "OTP", "Confirm"];
              const order: Step[] = ["mobile", "otp", "confirm"];
              const active = order.indexOf(step) >= i;
              return (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      active ? "bg-green-500 text-white" : "bg-white/10 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={active ? "text-green-400" : "text-gray-500"}>
                    {labels[i]}
                  </span>
                  {i < 2 && <span className="flex-1 h-px bg-white/10" />}
                </div>
              );
            })}
          </div>
        )}

        <div className="relative mt-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          {step === "mobile" && (
            <form onSubmit={sendOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Registered mobile number
                </label>
                <input
                  value={mobileInput}
                  onChange={(e) => setMobileInput(e.target.value)}
                  placeholder="e.g. 99902 96759"
                  inputMode="numeric"
                  autoComplete="tel"
                  className={inputCls}
                />
                <p className="mt-2 text-xs text-gray-500">
                  Enter the 10-digit number linked to your AgriGati account. You
                  will receive a 6-digit OTP by SMS.
                </p>
              </div>
              <button type="submit" disabled={loading} className={btnCls}>
                {loading ? "Sending OTP…" : "Send OTP"}
              </button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={verifyOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Enter OTP sent to +91 {mobile}
                </label>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
                  placeholder="6-digit OTP"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  className={`${inputCls} text-center text-2xl tracking-[0.5em]`}
                />
                <div className="mt-3 flex items-center justify-between text-sm">
                  <button
                    type="button"
                    onClick={() => setStep("mobile")}
                    className="text-gray-400 hover:text-green-400"
                  >
                    Change number
                  </button>
                  <button
                    type="button"
                    disabled={loading || cooldown > 0}
                    onClick={() => sendOtp()}
                    className="text-green-400 hover:text-green-300 disabled:text-gray-600 disabled:cursor-not-allowed"
                  >
                    {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={loading} className={btnCls}>
                {loading ? "Verifying…" : "Verify OTP"}
              </button>
            </form>
          )}

          {step === "confirm" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30 text-sm text-yellow-200 leading-relaxed">
                Deleting your account will:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Permanently delete your profile and personal data (name, contact, KYC details).</li>
                  <li>Remove your published land, service and input listings.</li>
                  <li>Sign you out of all devices and stop notifications.</li>
                  <li>Free your mobile number for fresh registration.</li>
                </ul>
              </div>
              <label className="flex items-start gap-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={ack}
                  onChange={(e) => setAck(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-green-500"
                />
                <span>
                  I understand my account and data will be permanently deleted
                  and this cannot be undone.
                </span>
              </label>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Type <span className="text-red-400 font-mono">DELETE</span> to confirm
                </label>
                <input
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="DELETE"
                  autoComplete="off"
                  className={`${inputCls} font-mono`}
                />
              </div>
              <button
                onClick={deleteAccount}
                disabled={loading || !ack || confirmText.trim().toUpperCase() !== "DELETE"}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-rose-600 hover:scale-[1.02] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Deleting…" : "Delete My Account Permanently"}
              </button>
            </div>
          )}

          {step === "done" && (
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/15 border border-green-400/40 flex items-center justify-center text-3xl">
                ✓
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white">
                Account deleted
              </h2>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                Your AgriGati account linked to +91 {mobile} has been permanently
                deleted along with your personal data. You have been signed out
                of all devices.
              </p>
              <a
                href="/"
                className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold hover:scale-105 transition"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-gray-500 leading-relaxed">
          Need help? Contact us at{" "}
          <a href="mailto:ceo@agrigati.com" className="text-green-400 hover:underline">
            ceo@agrigati.com
          </a>{" "}
          or +91 9990296759. See our{" "}
          <a href="/privacy" className="text-green-400 hover:underline">
            Privacy Policy
          </a>{" "}
          for details on data retention and deletion.
        </p>
      </div>
    </div>
  );
}
