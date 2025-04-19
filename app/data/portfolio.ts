export interface Project {
  title: string;
  year: number;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Website E-Commerce",
    year: 2025,
    description: "Membangun website e-commerce toko gelang.",
    image: "/gelang.png",
    link: "https://github.com/akunmu/ecommerce-project",
  },
  {
    title: "Website E-Commerce 2",
    year: 2024,
    description: "Membuat website toko kue.",
    image: "/tokokue.jpg",
    link: "https://github.com/akunmu/data-management",
  },
  {
    title: "Aplikasi Inventory",
    year: 2024,
    description: "Membuat aplikasi menggunakan netbeans untuk monitoring stok barang.",
    image: "/stokbarang.jpeg",
    link: "https://github.com/akunmu/mobile-inventory",
  },
];

export default projects;
