export default function DifBox( {h1,img, more}) {
    return (
       <>
            <div class="s-box">
                <div class="s-box1">
                    <h2>{h1}</h2>
                </div>
                <div class="s-box2 " id="g-p">
                    <img src={img} alt="" id="game" />
                </div>
                <div class="s-box3">
                    <a href="#">{more}</a>
                </div>
            </div>
        </>
    );
}