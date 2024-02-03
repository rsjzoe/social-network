export function Overlay({ iscreate }) {
  return (
    <>
      <div
        className={`overlay-container ${iscreate ? "active-creat-compte" : ""}`}
        id="overlayCon"
      >
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <img src="/image/phone.png" alt="" className="mario" />
          </div>

          <div className="overlay-panel overlay-right">
            <img src="/image/mario.gif" alt="" className="mario" />
          </div>
        </div>
        <button id="overlayBtn"></button>
      </div>
    </>
  );
}
