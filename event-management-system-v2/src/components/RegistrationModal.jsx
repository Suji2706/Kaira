import { useState, useEffect } from "react";

// Slide-in registration drawer.
const API_URL = "http://localhost:3001/registrations";

const blank = { name: "", email: "", phone: "", college: "", event: "", category: "" };

function check(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Name is required.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email, e.g. you@example.com.";
  if (!/^[6-9][0-9]{9}$/.test(v.phone)) e.phone = "Enter a 10-digit mobile number starting with 6, 7, 8 or 9.";
  if (!v.college.trim()) e.college = "College or organization is required.";
  if (!v.event) e.event = "Select an event to continue.";
  return e;
}

function RegistrationModal({ events, preselected, onClose, onDone }) {
  const [form, setForm] = useState({
    ...blank,
    event: preselected ? preselected.name : "",
    category: preselected ? preselected.category : "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const pickEvent = (e) => {
    const found = events.find((ev) => ev.name === e.target.value);
    setForm({ ...form, event: e.target.value, category: found ? found.category : "" });
    setErrors({ ...errors, event: "" });
  };

  const submit = async (e) => {
    e.preventDefault();
    const problems = check(form);
    setErrors(problems);
    if (Object.keys(problems).length) return;

    setLoading(true);
    setServerError("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, name: form.name.trim(), college: form.college.trim() }),
      });
      if (!res.ok) throw new Error("Bad response");
      setForm(blank);
      onDone();
    } catch {
      setServerError("Could not reach the database. Start JSON Server on port 3001 and try again.");
      setLoading(false);
    }
  };

  return (
    <div className="scrim" onClick={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label="Event registration" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-top">
          <div>
            <h2>Register</h2>
            <p>Fill in your details to join an event.</p>
          </div>
          <button className="x-btn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <form onSubmit={submit} noValidate>
          <label className="f">
            <span>Full Name</span>
            <input name="name" value={form.name} onChange={update} placeholder="Varshini" />
            {errors.name && <em>{errors.name}</em>}
          </label>

          <label className="f">
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
            {errors.email && <em>{errors.email}</em>}
          </label>

          <label className="f">
            <span>Phone Number</span>
            <input name="phone" inputMode="numeric" maxLength={10} value={form.phone} onChange={update} placeholder="9876543210" />
            {errors.phone && <em>{errors.phone}</em>}
          </label>

          <label className="f">
            <span>College / Organization</span>
            <input name="college" value={form.college} onChange={update} placeholder="National Engineering College" />
            {errors.college && <em>{errors.college}</em>}
          </label>

          <label className="f">
            <span>Selected Event</span>
            <select name="event" value={form.event} onChange={pickEvent}>
              <option value="">Select an event</option>
              {events.map((ev) => <option key={ev.id} value={ev.name}>{ev.name}</option>)}
            </select>
            {errors.event && <em>{errors.event}</em>}
          </label>

          <label className="f">
            <span>Category</span>
            <input value={form.category} readOnly placeholder="Filled in from the event" />
          </label>

          {serverError && <p className="srv-error">{serverError}</p>}

          <button className="btn btn-glow btn-wide" disabled={loading}>
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </aside>
    </div>
  );
}

export default RegistrationModal;
