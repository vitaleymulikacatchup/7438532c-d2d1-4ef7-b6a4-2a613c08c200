use client;
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <>
      <NavbarLayoutFloatingOverlay
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={50}
        buttonText="Explore MEME"
        onButtonClick={() => {}}
      />

      <div id="hero" data-section="hero">
        <BillboardHero
          title="Welcome to MemeMoon"
          subtitle="Join the fun of memecoin trading!"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          description="MemeMoon is a fun and engaging memecoin that aims to create a community of meme enthusiasts. Embrace the joy of memetic trading!"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy MemeMoon"
          steps={[
            { title: "Step 1", description: "Create a crypto wallet.", position: "left", image: "/images/placeholder1.avif", isCenter: false },
            { title: "Step 2", description: "Purchase Ethereum.", position: "center", image: "/images/placeholder2.avif", isCenter: true },
            { title: "Step 3", description: "Swap ETH for MemeMoon on DEX.", position: "right", image: "/images/placeholder3.avif", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="MemeMoon Tokenomics"
          description="Discover the key metrics behind MemeMoon coin."
          tokenData={[
            { value: "1,000,000,000", description: "Total Supply" },
            { value: "100,000,000", description: "Liquidity" },
            { value: "0.5%", description: "Transaction Tax"}
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoText="MemeMoon"
          items={[
            { label: "Privacy Policy", onClick: () => {} },
            { label: "Terms of Service", onClick: () => {} },
            { label: "Contact Us", onClick: () => {} }
          ]}
        />
      </div>
    </>
  );
}
