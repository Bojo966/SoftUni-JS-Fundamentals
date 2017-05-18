function solve(w, h, W, H) {
    let areaOfFirstRect = w * h;
    let areaOFSecondRect = W * H;
    let areaOfCommonRect = Math.min(w, W) * Math.min(h, H);

    let totalArea = areaOfFirstRect + areaOFSecondRect - areaOfCommonRect;
    console.log(totalArea)
}