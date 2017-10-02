const cdnPrefix = "https://raw.githubusercontent.com/HelloWorld017/nenwchan2/master/app/assets";
const assets = {
	bgMain1: "/backgrounds/main/main-background1.jpg",
	bgMain2: "/backgrounds/main/main-background2.jpg",
	bgMain3: "/backgrounds/main/main-background3.png",
	bgGallery: "/backgrounds/gallery/gallery-background.png",
	bgGalleryArt: "/backgrounds/gallery/gallery-background-art.png",
	bgGalleryKorean: "/backgrounds/gallery/gallery-background-korean.png",
	bgGalleryMath: "/backgrounds/gallery/gallery-background-math.png",
	bgGalleryProgress: "/backgrounds/gallery/gallery-background-progress.png",
	bgService1: "/backgrounds/service/service-background1.jpg",
	bgService2: "/backgrounds/service/service-background2.jpg",
	bgService3: "/backgrounds/service/service-background3.jpg",
	bgService4: "/backgrounds/service/service-background4.jpg",
	profile: "/profile/profile.png",
	sadIcon: "/image/sad.svg"
};

Object.keys(assets).forEach((k) => assets[k] = cdnPrefix + assets[k]);

export default assets;
