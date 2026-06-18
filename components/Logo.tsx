const OFFICIAL_LOGO_URL = "https://jesusebom.org/wp-content/uploads/2023/09/Logo-Jesus-e-bom-1024x401.png";

export function Logo() {
  return (
    <div className="logoMark officialLogo" aria-label="Instituto Jesus é Bom">
      <img src={OFFICIAL_LOGO_URL} alt="Instituto Jesus é Bom" />
    </div>
  );
}
