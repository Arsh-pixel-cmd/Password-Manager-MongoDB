import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// MongoDB’s _id, which is globally unique.

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [showInputPassword, setShowInputPassword] = useState(false);
  const [alert, setAlert] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const getPasswords = async () => {
    try {
      let req = await fetch(`${API_URL}/api/passwords`);
      if (!req.ok) throw new Error("Network response was not ok");
      let passwords = await req.json();
      setPasswordArray(passwords);
    } catch (err) {
      console.error("Failed to fetch passwords:", err);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const togglePasswordVisibility = (id) => {
    const updated = passwordArray.map((item) =>
      item._id === id ? { ...item, show: !item.show } : item
    );
    setPasswordArray(updated);

    const toggled = updated.find((item) => item._id === id);
    setAlert(
      toggled.show
        ? `Showing password for ${toggled.site}`
        : `Hiding password 🔒`
    );
    setTimeout(() => setAlert(null), 2000);
  };

  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) return;

    if (editingId) {
      await fetch(`${API_URL}/api/passwords/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast.info("Updated Sucessfully✨");
      setEditingId(null);
    } else {
      await fetch(`${API_URL}/api/passwords`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      toast.success("Password saved ✨");
    }

    setForm({ site: "", username: "", password: "" });
    getPasswords();
  };

  const deletePassword = async (id) => {
    await fetch(`${API_URL}/api/passwords/${id}`, {
      method: "DELETE",
    });
    toast.warn("Password deleted ❌");
    getPasswords();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, msg) => {
    navigator.clipboard.writeText(text);
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const editPassword = (id) => {
    const selected = passwordArray.find((i) => i._id === id);
    if (selected) {
      setForm({
        site: selected.site,
        username: selected.username,
        password: selected.password,
      });
      setEditingId(id);
    }
  };

  return (
    <>
      {/* Toast container */}
      <ToastContainer />

      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-24">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mt-6"
        >
          <span className="text-purple-600"> &lt;</span>
          Encryption you can
          <span className="text-purple-600"> trust /&gt;</span>
        </Motion.h1>

        <p className="text-purple-900 text-lg text-center mb-6">
          One vault, endless security for all your accounts
        </p>

        {/* Alert */}
        <AnimatePresence>
          {alert && (
            <Motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-5 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded-xl shadow-lg z-[9999]"
            >
              {alert}
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-purple-200"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4 relative">
            <input
              className="rounded-xl border border-purple-400 flex-1 text-purple-950 px-4 py-2 focus:outline-purple-600"
              type="text"
              name="site"
              placeholder="Website URL"
              value={form.site}
              onChange={handleChange}
            />
            <input
              className="rounded-xl border border-purple-400 flex-1 text-purple-950 px-4 py-2 focus:outline-purple-600"
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative flex-1">
              <input
                className="rounded-xl border border-purple-400 w-full text-purple-950 px-4 py-2 pr-10 focus:outline-purple-600"
                type={showInputPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowInputPassword(!showInputPassword)}
              >
                {showInputPassword ? (
                  <lord-icon
                    src="https://cdn.lordicon.com/tyounuzx.json"
                    trigger="hover"
                    colors="primary:#4f1091,secondary:#121331"
                    style={{ width: "28px", height: "28px" }}
                  ></lord-icon>
                ) : (
                  <lord-icon
                    src="https://cdn.lordicon.com/snxksidl.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#121331,secondary:#4f1091"
                  ></lord-icon>
                )}
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-2 w-fit mx-auto shadow-md transition hover:cursor-pointer"
          >
            {editingId ? "Update" : "Add Password"}
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover"
              style={{ width: "28px", height: "28px" }}
            ></lord-icon>
          </button>
        </Motion.div>

        {/* Vault */}
        <div className="mt-10 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">
            Your Vault
          </h2>
          {passwordArray.length === 0 ? (
            <p className="text-gray-600 text-center">No passwords saved yet.</p>
          ) : (
            <Motion.table
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="table-auto w-full border-collapse rounded-xl overflow-hidden shadow-lg"
            >
              <thead className="bg-purple-700 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Site</th>
                  <th className="py-3 px-4 text-left">Username</th>
                  <th className="py-3 px-4 text-left">Password</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-purple-50">
                <AnimatePresence>
                  {passwordArray.map((item, index) => (
                    <Motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-purple-200"
                    >
                      {/* Site */}
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <a
                            href={`https://${item.site}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline"
                          >
                            {item.site}
                          </a>
                          <span
                            className="material-symbols-outlined text-black text-lg cursor-pointer hover:text-purple-700"
                            onClick={() =>
                              copyToClipboard(item.site, "Site copied 📋")
                            }
                          >
                            content_copy
                          </span>
                        </div>
                      </td>

                      {/* Username */}
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          {item.username}
                          <span
                            className="material-symbols-outlined text-black text-lg cursor-pointer hover:text-purple-700"
                            onClick={() =>
                              copyToClipboard(
                                item.username,
                                "Username copied 👍🏻"
                              )
                            }
                          >
                            content_copy
                          </span>
                        </div>
                      </td>

                      {/* Password */}
                      <td className="py-2 px-4 font-mono">
                        <div className="flex items-center gap-2">
                          {item.show ? item.password : "••••••••"}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-2 px-4  flex justify-center gap-3">
                        {/* Show/Hide */}
                        <button
                          onClick={() => togglePasswordVisibility(item._id)}
                          className="p-2 rounded-full cursor-pointer hover:bg-purple-200 transition flex items-center justify-center"
                        >
                          {item.show ? (
                            <lord-icon
                              src="https://cdn.lordicon.com/tyounuzx.json"
                              trigger="hover"
                              style={{ width: "26px", height: "26px" }}
                            ></lord-icon>
                          ) : (
                            <lord-icon
                              src="https://cdn.lordicon.com/snxksidl.json"
                              trigger="hover"
                              stroke="bold"
                              colors="primary:#121331,secondary:#4f1091"
                            ></lord-icon>
                          )}
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => deletePassword(item._id)}
                          className="p-2 rounded-full cursor-pointer hover:bg-red-200 transition flex items-center justify-center"
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/jmkrnisz.json"
                            trigger="hover"
                            colors="primary:#b91c1c,secondary:#4f1091"
                            style={{ width: "26px", height: "26px" }}
                          ></lord-icon>
                        </button>

                        {/* Copy Password */}
                        <button
                          onClick={() =>
                            copyToClipboard(item.password, "Password copied 🔑")
                          }
                          className="p-2 rounded-full hover:bg-purple-200 transition flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined cursor-pointer text-black text-lg">
                            content_copy
                          </span>
                        </button>

                        {/* Edit */}
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            editPassword(item._id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#4f1091"
                            style={{
                              width: "35px",
                              height: "35px",
                            }}
                          ></lord-icon>
                        </span>
                      </td>
                    </Motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </Motion.table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
