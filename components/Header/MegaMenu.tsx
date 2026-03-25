export default function MegaMenu() {
  return (
    <div className="mega-menu-container">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col">
            <h6 className="fw-bold small mb-3">SUMMER 2026 MEN</h6>
            <ul className="list-unstyled small lh-lg">
              <li>View all</li>
              <li>New Arrivals</li>
              <li>Pants</li>
              <li>Bermuda Shorts</li>
              <li>Blazer</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="fw-bold small mb-3">PANTS</h6>
            <ul className="list-unstyled small lh-lg">
              <li>Chino</li>
              <li>Cargo</li>
              <li>Jogger</li>
              <li>Denim</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="fw-bold small mb-3">SHOP BY MODEL</h6>
            <ul className="list-unstyled small lh-lg">
              <li>Chile</li>
              <li>Milano</li>
              <li>Osaka</li>
              <li>London</li>
            </ul>
          </div>
          <div className="col">
            <h6 className="fw-bold small mb-3">SHOP BY FIT</h6>
            <ul className="list-unstyled small lh-lg">
              <li>Extra Slim Fit</li>
              <li>Slim Fit</li>
              <li>Regular Fit</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold small mb-3">SS26 MASON'S MEN</h6>
            <img
              src="https://via.placeholder.com/400x250"
              alt="Promo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}