export default function VehicleAlertMVP() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">SafeRide Alert</h1>
          <p className="text-xl max-w-3xl mb-6">Sistem notifikasi kehilangan kendaraan berbasis lokasi dan real-time untuk membantu warga sekitar bertindak lebih cepat saat terjadi pencurian kendaraan.</p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-white text-red-600 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">Laporkan Kehilangan</button>

            <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">Lihat Demo Alert</button>
          </div>
        </div>
      </section>

      {
        /* Report Loss UI */
        <section className="bg-white py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">UI Laporan Kehilangan</h2>

            <div className="bg-gray-50 rounded-2xl shadow p-6 space-y-5 border">
              <div>
                <label className="block font-semibold mb-2">Jenis Kendaraan</label>
                <select className="w-full border rounded-xl p-3">
                  <option>Motor</option>
                  <option>Mobil</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Merk / Tipe Kendaraan</label>
                <input type="text" placeholder="Contoh: Honda Beat Hitam" className="w-full border rounded-xl p-3" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Nomor Polisi</label>
                <input type="text" placeholder="Contoh: L 1234 AB" className="w-full border rounded-xl p-3" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Lokasi Kehilangan</label>
                <input type="text" placeholder="Contoh: Parkiran Kampus ITS" className="w-full border rounded-xl p-3" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Waktu Kehilangan</label>
                <input type="datetime-local" className="w-full border rounded-xl p-3" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Deskripsi Tambahan</label>
                <textarea placeholder="Tambahkan ciri kendaraan atau kronologi singkat" className="w-full border rounded-xl p-3 h-28"></textarea>
              </div>

              <div>
                <label className="block font-semibold mb-2">Upload Foto Kendaraan</label>
                <div className="border-2 border-dashed rounded-2xl p-8 text-center text-gray-500 bg-white">Klik untuk upload foto kendaraan</div>
              </div>

              <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.01] transition">Kirim Alert Kehilangan</button>
            </div>
          </div>
        </section>

        /* Demo Alert */
      }
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contoh Alert</h2>

          <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-2xl shadow">
            <p className="font-bold text-red-700 mb-2">🚨 Kehilangan Kendaraan Terdekat</p>
            <p>
              <strong>Motor:</strong> Honda Beat Hitam
            </p>
            <p>
              <strong>Lokasi:</strong> Parkiran Kampus ITS
            </p>
            <p>
              <strong>Waktu:</strong> 10 menit yang lalu
            </p>
            <p>
              <strong>Radius Alert:</strong> 500 meter
            </p>

            <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-xl hover:scale-105 transition">Saya Melihat Sesuatu</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 text-center">
        <p className="text-lg font-semibold">SafeRide Alert MVP</p>
        <p className="text-sm mt-2 opacity-70">MVP siap diuji ke pengguna untuk memvalidasi efektivitas distribusi informasi kehilangan kendaraan secara real-time.</p>
      </footer>
    </div>
  );
}
