export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "id",
  brandName: "Dzakwan Abbas",
  copyright: "© 2026 Dzakwan Abbas",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "Info",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "Kembali",
  eyebrow: "Tentang — Fotografer Independen",
  title: "Saya memotret cahaya yang tenang di tempat-tempat yang gelisah.",
  paragraphs: [
    "Nama saya Dzakwan Abbas, fotografer independen yang berbasis di Medan. Selama setahun terakhir saya berkeliling Medan dan sekitarnya, membawa satu kamera dan terlalu banyak rasa penasaran. Bagi saya, memotret bukan tentang berburu momen dramatis — melainkan menunggu dengan sabar sampai sebuah tempat mau bercerita dengan caranya sendiri.",
    "Karya saya bergerak di antara potret, lanskap, dan kehidupan jalanan. Benang merahnya sederhana: cahaya alami, warna yang jujur, dan manusia yang dibiarkan menjadi dirinya sendiri. Saya percaya foto terbaik lahir dari kedekatan, bukan dari jarak yang aman.",
    "Sebagian karya ini pernah tampil di pameran keliling dan halaman beberapa majalah perjalanan. Di luar proyek personal, saya menerima penugasan editorial, dokumentasi perjalanan, dan sesi potret. Jika ada cerita yang ingin Anda abadikan, mari bicara — segelas kopi biasanya cukup untuk memulai.",
  ],
  contactLabel: "Kontak",
  contactEntries: [
    {
      label: "Email",
      value: "halo@dzakwanabbas",
      href: "mail:dzakwanabbas018@gmail.com",
    },
    {
      label: "Instagram",
      value: "@dzakwanabbas435",
      href: "https://www.instagram.com/dzakwanabbbas435?stkn=MTd0ZjlvNWlvc2UzNQ==",
    },
    {
      label: "Telepon",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
    },
    {
      label: "Studio",
      value: "Jl Sumber Amal no 242, Kelurahan Harjosari II, Kecamtan Amplas",
    },
  ],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "Detail Foto",
  fileLabel: "Berkas",
  seriesLabel: "Seri",
  closeLabel: "Tutup",
};

export const galleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/portrait_01.webp",
      category: "Potret",
      title: "Wajah — No. 01",
      description:
        "Ibu Laras memakai kebaya warisan neneknya untuk sesi ini. Cahaya jendela sore itu jatuh pas di pipinya, dan ia tersenyum sebentar sebelum kembali ke ekspresi serius yang katanya 'lebih sopan untuk difoto'.",
    },
    {
      src: "/images/landscape_01.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 01",
      description:
        "Pukul empat pagi, kabut masih mengisi kaldera seperti lautan susu. Ketika matahari muncul, kawah itu perlahan mengapung ke permukaan. Semua orang di sekitar saya diam — pemandangan seperti ini memang menuntut hening.",
    },
    {
      src: "/images/portrait_02.webp",
      category: "Potret",
      title: "Wajah — No. 02",
      description:
        "Pak Dermo sudah empat puluh tahun melaut dari dermaga yang sama. 'Laut tidak pernah berbohong,' katanya sambil menatap ke luar jendela. Saya memotret tepat setelah kalimat itu selesai.",
    },
    {
      src: "/images/extra_1047.webp",
      category: "Jalanan",
      title: "Jalanan — No. 01",
      description:
        "Gang bata tua ini selalu lebih sunyi dari jalan besarnya. Saya lewat hampir setiap pagi selama seminggu, menunggu satu orang melintas di ujung gang agar skalanya terasa. Pagi itu akhirnya ada yang lewat.",
    },
    {
      src: "/images/landscape_02.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 02",
      description:
        "Sawah terasering ini berubah warna setiap lima belas menit menjelang senja. Saya menunggu sampai cahaya miring menyapu undakan padi dan satu pohon palem berdiri sendirian di tengah kurva.",
    },
    {
      src: "/images/ex_720.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 02",
      description:
        "Sawah terasering ini berubah warna setiap lima belas menit menjelang senja. Saya menunggu sampai cahaya miring menyapu undakan padi dan satu pohon palem berdiri sendirian di tengah kurva.",
    },
    {
      src: "/images/2.webp",
      category: "Potret",
      title: "Wajah — No. 03",
      description:
        "Latihan terakhir sebelum pementasan. Penari ini menahan pose selama hampir satu menit penuh, dan lampu panggung hanya menyisakan garis emas di tepi tubuhnya. Satu-satunya frame yang saya ambil malam itu.",
    },
    {
      src: "/images/3.webp",
      category: "Pengembaraan",
      title: "Pengembaraan — No. 01",
      description:
        "Berdiri di tepi fjord ini, saya akhirnya paham kenapa orang rela mendaki berjam-jam demi satu pemandangan. Airnya biru pekat, tebingnya putih kelabu, dan anginnya menghapus semua pikiran.",
    },
    {
      src: "/images/4.webp",
      category: "Jalanan",
      title: "Jalanan — No. 02",
      description:
        "Eskalator stasiun tua ini turun menuju peron yang nyaris kosong. Kayu gelap, kaca buram, dan langit-langit berkisi — arsitektur yang dibangun untuk orang-orang yang tidak buru-buru.",
    },
    {
      src: "/images/portrait_04.webp",
      category: "Potret",
      title: "Wajah — No. 04",
      description:
        "Hujan baru saja reda ketika kami berdiri di bawah deretan neon. Basah di mana-mana, tapi pantulan cahaya di kulitnya terlalu sayang untuk dilewatkan. Kota kadang memberi lampu terbaik justru setelah hujan.",
    },
    {
      src: "/images/extra_1039.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 03",
      description:
        "Air terjun ini tidak ada di peta mana pun. Seorang petani menunjukkan jalannya, dan ketika kabut tipis menembus rimbunnya lembah, saya mengerti kenapa warga sekitar menganggap tempat ini istimewa.",
    },
    {
      src: "/images/extra_1027.webp",
      category: "Potret",
      title: "Wajah — No. 05",
      description:
        "Ia tidak melihat ke kamera, dan justru di situlah fotonya bekerja. Cahaya jendela yang lembut, tatapan yang melayang ke luar — kadang potret terbaik adalah yang tidak sadar sedang difoto.",
    },
    {
      src: "/images/extra_1080.webp",
      category: "Hening",
      title: "Hening — No. 01",
      description:
        "Stroberi musim pertama di pasar pagi, masih mengilap oleh embun. Saya memotretnya apa adanya, rapat dan penuh bingkai — warna merah seperti ini tidak butuh komposisi yang rumit.",
    },
    {
      src: "/images/extra_1052.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 04",
      description:
        "Batu karang ini berdiri sendirian menghadap laut yang tidak pernah selesai mengamuk. Pasirnya hitam, ombaknya putih, dan dunia terasa hanya terdiri dari dua warna sore itu.",
    },
    {
      src: "/images/extra_129.webp",
      category: "Jalanan",
      title: "Jalanan — No. 03",
      description:
        "Dua orang duduk di bangku menghadap senja, tidak bicara apa-apa. Saya memotret dari jauh, lalu pergi sebelum mereka sadar. Beberapa momen memang bukan milik kita — kita hanya kebetulan lewat.",
    },
    {
      src: "/images/extra_1021.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 05",
      description:
        "Kabut bergerak di antara pepohonan seperti napas yang tertahan. Dalam hitam putih, hutan ini kehilangan warnanya tapi mendapatkan sesuatu yang lain: kedalaman yang tidak terlihat saat terang.",
    },
    {
      src: "/images/portrait_06.webp",
      category: "Potret",
      title: "Wajah — No. 06",
      description:
        "Seorang perajin di bengkelnya yang sempit. Saya mematikan semua lampu kecuali satu. Dalam hitam putih, kerutan di wajahnya membaca seperti peta perjalanan yang tidak pernah ia ceritakan.",
    },
    {
      src: "/images/extra_1036.webp",
      category: "Pengembaraan",
      title: "Pengembaraan — No. 02",
      description:
        "Dua tenda kuning di tengah hamparan salju — satu-satunya warna hangat dalam radius bermil-mil. Malam itu turun sampai minus lima belas, tapi pemandangan paginya membuat semuanya impas.",
    },
    {
      src: "/images/extra_1018.webp",
      category: "Pengembaraan",
      title: "Pengembaraan — No. 03",
      description:
        "Jalan kecil ini berkelok menembus bukit-bukit hijau tanpa satu pun kendaraan lewat selama satu jam. Saya berhenti, mematikan mesin, dan membiarkan sunyi menyelesaikan komposisinya sendiri.",
    },
    {
      src: "/images/extra_106.webp",
      category: "Hening",
      title: "Hening — No. 02",
      description:
        "Bunga liar merah muda melawan langit biru yang bersih. Saya memotret dari bawah, membiarkan langit menjadi latar satu-satunya. Kadang still life terbaik tumbuh sendiri di pinggir jalan.",
    },
    {
      src: "/images/extra_1044.webp",
      category: "Pengembaraan",
      title: "Pengembaraan — No. 04",
      description:
        "Seorang pendaki berdiri di tepi sungai berbatu, kecil sekali dibanding lembah berkabut di belakangnya. Saya sengaja membiarkannya sebesar itu — gunung memang seharusnya membuat kita merasa kecil.",
    },
    {
      src: "/images/extra_122.webp",
      category: "Jalanan",
      title: "Jalanan — No. 04",
      description:
        "Kubah katedral menyala di seberang sungai, dan jembatan itu melengkung menuju cahayanya. Jam sebelas malam, tripod di atas pagar, dan kota akhirnya memperlihatkan sisi tenangnya.",
    },
    {
      src: "/images/extra_1025.webp",
      category: "Hening",
      title: "Hening — No. 03",
      description:
        "Anjing kecil ini kedinginan setelah hujan, jadi pemiliknya membungkusnya dengan selimut flanel. Ia duduk diam seperti biksu kecil di tengah hutan. Potret paling kooperatif yang pernah saya dapatkan.",
    },
    {
      src: "/images/extra_1043.webp",
      category: "Lanskap",
      title: "Cakrawala — No. 06",
      description:
        "Dinding granit raksasa berdiri di balik barisan pinus, dan sungai kecil di depannya memantulkan semuanya. Lembah ini sudah difoto jutaan kali — saya cuma ingin satu versi untuk diri sendiri.",
    },
    {
      src: "/images/extra_11.webp",
      category: "Pengembaraan",
      title: "Pengembaraan — No. 05",
      description:
        "Lembah berkabut dengan sungai kecil yang berkelok malas ke arah danau. Cahayanya pucat, hampir tanpa warna, tapi justru di situlah tenangnya. Foto untuk dilihat sambil menahan napas.",
    },
  ],
};
