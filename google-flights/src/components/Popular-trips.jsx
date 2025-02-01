import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../styles/popularTrips.css"; 

const PopularTrips = () => {
  return (
    <div className="themain">
      <div className="breadcrumb">
        <a href="#" style={{color:"#8ab4f8"}}>Flights</a> &gt; <a href="#">From Tel Aviv-Yafo</a>
      </div>

      <div className="title">Cheap flights from Tel Aviv-Yafo</div>

      <div className="subtitle">
        Popular trips from Tel Aviv-Yafo
        <i className="fas fa-info-circle info-icon"></i>
      </div>

      <div className="flights">
        {/* Flight - Vienna */}
        <div className="flight">
          <img
            alt="Image of Vienna"
            src="https://storage.googleapis.com/a1aa/image/6tyH-Hy4F8XhsVOCPG9Uoy0Vjq5JtHm_LpBvfRjaQuI.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">Vienna</div>
            <div className="flight-price">JOD 71</div>
            <div className="flight-info">3 May – 12 May</div>
            <div className="flight-info">Non-stop • 3 hrs 40 min • Ryanair</div>
          </div>
        </div>

        {/* Flight - Los Angeles */}
        <div className="flight">
          <img
            alt="Image of Los Angeles"
            src="https://storage.googleapis.com/a1aa/image/ehvn1blwfnuRbc4N8r3FdwpSWRnkT8htIteHGj9JuEY.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">Los Angeles</div>
            <div className="flight-price">JOD 642</div>
            <div className="flight-info">7 Mar – 16 Mar</div>
            <div className="flight-info">1 stop • 18 hrs 5 min • ITA</div>
          </div>
        </div>

        {/* Flight - Madrid */}
        <div className="flight">
          <img
            alt="Image of Madrid"
            src="https://storage.googleapis.com/a1aa/image/fJxdroSrKcQXIuIb9UVdgOrUPU9mhFvWMzPMu4efYv4.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">Madrid</div>
            <div className="flight-price">JOD 204</div>
            <div className="flight-info">24 Apr – 3 May</div>
            <div className="flight-info">
              Non-stop • 5 hrs 25 min • Iberia Express
            </div>
          </div>
        </div>

        {/* Flight - New York */}
        <div className="flight">
          <img
            alt="Image of New York"
            src="https://storage.googleapis.com/a1aa/image/-hVwCdQsqemEUft996HdgYZd1tcL94Em0T9sZO6RaDc.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">New York</div>
            <div className="flight-price">JOD 502</div>
            <div className="flight-info">7 Mar – 13 Mar</div>
            <div className="flight-info">
              1 stop • 28 hrs 10 min • Brussels Airlines
            </div>
          </div>
        </div>

        {/* Flight - Athens */}
        <div className="flight">
          <img
            alt="Image of Athens"
            src="https://storage.googleapis.com/a1aa/image/NhRH419p6Z2j_FZo7gcqMo_S23QPQwYRp-86WnwFUj8.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">Athens</div>
            <div className="flight-price">JOD 120</div> {/* Added missing price */}
            <div className="flight-info">24 Mar – 1 Apr</div>
          </div>
        </div>

        {/* Flight - Singapore */}
        <div className="flight">
          <img
            alt="Image of Singapore"
            src="https://storage.googleapis.com/a1aa/image/NOzfiuQqISC8wgPDH_XjUF8PAoKzmi3EW94AoxKaLPA.jpg"
          />
          <div className="flight-details">
            <div className="flight-title">Singapore</div>
            <div className="flight-price">JOD 850</div> {/* Added missing price */}
            <div className="flight-info">13 Feb – 22 Feb</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTrips;
