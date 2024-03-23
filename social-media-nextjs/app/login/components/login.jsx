export default function LoginForm({ setFormType }) {
  return (
    <div className="flex flex-col gap-5 my-10">
      <input
        className="bg-gray-100 border p-3 rounded"
        type="text"
        placeholder="E-mail adresi"
      />
      <input
        className="bg-gray-100 border p-3 rounded"
        type="password"
        placeholder="Şifre"
      />

      <button className="bg-blue-400 py-2 text-white font-semibold rounded">
        Giriş Yap
      </button>

      <div className="flex justify-end">
        <span
          className="text-gray-600 cursor-pointer"
          onClick={() => setFormType("register")}
        >
          Henüz bir hesabınız yok mu?
        </span>
      </div>
    </div>
  );
}
