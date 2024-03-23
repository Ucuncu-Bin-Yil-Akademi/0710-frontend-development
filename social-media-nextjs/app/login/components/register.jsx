export default function RegisterForm({ setFormType }) {
  return (
    <div className="flex flex-col gap-5 my-10">
      <div className="grid grid-cols-2 gap-3">
        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          placeholder="Ad Soyad"
        />
        <input
          className="bg-gray-100 border p-3 rounded"
          type="text"
          placeholder="Kullanıcı Adı"
        />
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
      </div>
      <textarea
        className="bg-gray-100 border p-3 rounded resize-none"
        type="text"
        placeholder="Biyografi"
      />

      <button className="bg-blue-400 py-2 text-white font-semibold rounded">
        Kayıt Ol
      </button>

      <div className="flex justify-end">
        <span
          className="text-gray-600 cursor-pointer"
          onClick={() => setFormType("login")}
        >
          Zaten bir hesabınız var mı?
        </span>
      </div>
    </div>
  );
}
