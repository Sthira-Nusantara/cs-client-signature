# Penguatan Keamanan Halaman Verifikasi Signature

## Apa masalahnya sebelumnya

- Beberapa komponen pustaka yang dipakai (Next.js, axios, dan beberapa turunannya) punya celah keamanan yang sudah diketahui publik.
- Halaman verifikasi mengirim seluruh data dokumen dari server ke browser, termasuk data yang tidak ditampilkan (penandatangan lain yang belum menyetujui, ID internal). Orang yang membuka "lihat sumber halaman" bisa melihatnya.
- ID pada alamat halaman diteruskan ke server data tanpa diperiksa, sehingga bisa disalahgunakan untuk mengarahkan permintaan ke alamat lain.
- Jika server data lambat atau tidak bisa dihubungi, dokumen yang sebenarnya sah malah tampil sebagai "Dokumen Tidak Valid".
- Halaman tanda tangan HR error jika ID tidak cocok dengan penandatangan mana pun.
- Halaman warehouse selalu menulis "telah ditandatangani secara elektronik" walaupun dokumen masih menunggu atau ditolak.
- Belum ada pengaman tambahan di header (misalnya mencegah halaman ditanam di situs lain).

## Apa yang diubah

- Pustaka diperbarui ke versi yang sudah ditambal; pemeriksaan keamanan untuk paket produksi kini bersih.
- Data dokumen kini diproses di server saja; browser hanya menerima tampilan akhir. Halaman HR hanya memakai data yang memang ditampilkan.
- ID harus berformat UUID yang benar; selain itu langsung dianggap tidak valid.
- "Dokumen Tidak Valid" hanya muncul jika data memang tidak ditemukan atau ditolak (kesalahan 4xx). Gangguan jaringan, waktu tunggu habis (10 detik), atau error server kini menampilkan pesan "Sedang ada kendala di server, coba lagi nanti".
- Halaman HR menampilkan "Dokumen Tidak Valid" jika penandatangan tidak ditemukan, bukan error.
- Halaman warehouse hanya menulis kalimat "telah ditandatangani" jika statusnya Disetujui; selain itu tertulis "Dokumen ini belum sepenuhnya disetujui. Status saat ini: ...".
- Ditambahkan header keamanan (anti ditanam di situs lain, anti tebak tipe file, dan lainnya) dan header "X-Powered-By" dimatikan.
- Nama variabel lingkungan tidak lagi memakai awalan `NEXT_PUBLIC_`.

## Yang perlu dilakukan tim Ops

1. Di hosting, buat variabel baru `SIGNATURE_API_URL` dan `SIGNATURE_WAREHOUSE_API_URL` dengan nilai yang sama seperti `NEXT_PUBLIC_SIGNATURE_API_URL` dan `NEXT_PUBLIC_SIGNATURE_WAREHOUSE_API_URL`. Tidak harus segera: nama lama masih berfungsi untuk sementara.
2. Setelah nama baru terpasang, hapus nama lama.
3. Deploy ulang aplikasi agar semua perubahan di atas aktif.
