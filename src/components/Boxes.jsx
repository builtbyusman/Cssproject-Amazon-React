import "../components/Main.css"

export default function Boxes( {h1, img1, img1p, img2, img2p, img3, img3p, img4, img4p, more}) {
    return (
        <>
          <div className="s-box">
              <div className="s-box1">
                        <h2>{h1}</h2>
                    </div>
                    <div className="s-box2">
                        <div className="hm-1">
                            <img src={img1} alt="" className="imge1" />
                            <p className="para1">{img1p}</p>
                        </div>
                        <div className="hm-1">
                            <img src={img2} alt="" className="imge1" />
                            <p class="para1">{img2p}</p>
                        </div>
                        <div className="hm-1">
                            <img src={img3} alt="" className="imge1" />
                            <p className="para1">{img3p}</p>
                        </div>
                        <div className="hm-1">
                            <img src={img4} alt="" className="imge1" />
                            <p className="para1">{img4p}</p>
                        </div>
                    </div>
                    <div className="s-box3">
                        <a href="#">{more}</a>
                    </div>
          </div>
        </>
    );
}