export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-gray-100 border-t border-gray-300 pt-5 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 text-center space-y-6">
        
        <h2 className="text-2xl font-bold text-red-600">
          My Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-20 mt-20 justify-center items-center">

          {/* Project 1 */}
          <div
            className="
              w-full md:max-w-[300px] h-[520px]
              bg-white rounded-2xl
              shadow-xl shadow-black/10
              animate-float-smooth
              relative
            "
          >
            <div className="flex items-center justify-center mt-4 px-4">
              <h3 className="text-[13px] font-semibold text-center">
                Sistem IoT Kesuburan Tanaman Menggunakan Arduino
              </h3>
            </div>

            <img
              src="/assets/images/gambar2.jpeg"
              alt=""
              className="w-[250] h-[260] mx-auto absolute top-[70px] left-1/2 -translate-x-1/2 rounded-[20px]"
            />

            <div
              className="
                px-4
                text-gray-600
                text-[15px] md:text-[12px]
                text-left
                absolute top-[75px]
                mt-70 md:mt-20 lg:mt-68
                h-full md:h-[100px] lg:h-full
                overflow-hidden text-ellipsis
              "
            >
              <p>
                Sistem IoT kesuburan tanaman berbasis Arduino ini berfokus pada penggunaan
                sensor NPK untuk mengetahui kualitas tanah melalui pengukuran kadar
                Nitrogen (N), Fosfor (P), dan Kalium (K). Data unsur hara tersebut
                diproses oleh Arduino Uno dan dikirim melalui modul Bluetooth HC-05
                ke smartphone, sehingga kondisi kesuburan tanah dapat dipantau
                secara lebih akurat dan efisien.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="
              w-full md:max-w-[300px] h-[520px]
              bg-white rounded-2xl
              shadow-xl shadow-black/10
              animate-float-smooth
              relative
            "
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center justify-center mt-4 px-4">
              <h3 className="text-[13px] font-semibold text-center">
                Aplikasi Point Of Sale berbasis Dekstop
              </h3>
            </div>

            <img
              src="/assets/images/gambar3.jpeg"
              alt=""
              className="w-[250] h-[260] mx-auto absolute top-[50px] left-1/2 -translate-x-1/2 rounded-[20px]"
            />

            <div
              className="
                px-4
                text-gray-600
                text-[15px] md:text-[12px]
                text-left
                absolute top-[75px]
                mt-70 md:mt-20 lg:mt-68
                h-full md:h-[100px] lg:h-full
                overflow-hidden text-ellipsis
              "
            >
              <p>
                Aplikasi Point Of Sale berbasis desktop ini digunakan untuk
                mempermudah proses transaksi penjualan, pencatatan data barang,
                serta pengelolaan stok dan laporan secara sederhana. Sistem ini
                membantu pelaku usaha melakukan perhitungan transaksi dengan lebih
                cepat, mengurangi kesalahan pencatatan, dan membuat data penjualan
                tersimpan dengan rapi serta terstruktur.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="
              w-full md:max-w-[300px] h-[520px]
              bg-white rounded-2xl
              shadow-xl shadow-black/10
              animate-float-smooth
              relative
            "
            style={{ animationDelay: "1.6s" }}
          >
            <div className="flex items-center justify-center mt-4 px-4">
              <h3 className="text-[13px] font-semibold text-center">
                Sistem Teknologi E-Parking Menggunakan Arduino
              </h3>
            </div>

            <img
              src="/assets/images/gambar.jpeg"
              alt=""
              className="w-[250] h-[260] mx-auto absolute top-[70px] left-1/2 -translate-x-1/2 rounded-[20px]"
            />

            <div
              className="
                px-4
                text-gray-600
                text-[15px] md:text-[12px]
                text-left
                absolute top-[60px]
                mt-70 md:mt-20 lg:mt-68
                h-full md:h-[100px] lg:h-full
                overflow-hidden text-ellipsis
              "
            >
              <p>
                Sistem Teknologi E-Parking menggunakan Arduino ini merupakan
                replika proyek sederhana yang dirancang untuk mensimulasikan
                sistem parkir otomatis dalam skala kecil. Arduino digunakan
                sebagai pengendali utama yang terhubung dengan sensor pendeteksi
                kendaraan dan indikator slot parkir. Meskipun masih berupa
                prototipe, sistem ini mampu menunjukkan cara kerja dasar teknologi
                parkir otomatis secara efektif dan terstruktur.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}