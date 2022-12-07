export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1040672701402062890/1040673159629779004/3512c83d-dc2a-45b5-bcd7-920baf540b5e.png",
      name: "WXN DEV",
      description: "Discord türkiyenin en büyük discord bot komutları arşivi ve en büyük discord botu uptime, hostlayıcı websitesi. Wxn veritabanında discord botlarına özgü yüzlerce discord bot komutu bulunmaktadır ve kendi discord botunuzu yaratmanıza yardımcı olur.",
      link: "https://nuhz.vercel.app",
    },
    {
      id: 2,
      image: "https://media.discordapp.net/attachments/631918693689065491/1039666714260013146/IMG_6865.jpg?width=637&height=637",
      name: "Youtube Channel",
      description: "I am a professional editor and intermediate software developer. I have been professionally interested in community management and development for 5 years, I have high level knowledge and experience in areas such as community management and social media management. I post videos about discord on my youtube channel.",
      link: "https://youtube.com/UCQoCTiM9FHwEky0EU4tJV8A",
    }
  ];
  res.status(200).json(data);
};
