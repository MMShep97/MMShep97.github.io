/********************************************* Front-page background image cross-fade logic ************************************************************/
var imageArr = ["P3QV9zOVQVeit2P_PRyMC1BrmcfupO4DLehye7od24MUuzucY_uJc3G4HjQlbdpyW4gOOVjYNEn_NOdE2GY1GNF02ydiumkdefIK4AfMdQfTxLwWqD3uxMxNBDdj5KUy-7Y4B0Fh2zs=w2400",
    "bJVJSBtWfq4LAwHaquInEAm4fF5nQn1yxxKWr4q4RDuz2ajALnzuvkU2tsLV9IFFKgF4tRPe1neZaOzMh1di9aii-CAFv92eB0jpyT-GfFt30bzCkVpPjbXj1wURQiwx3RUSX1eHAmo=w2400",
    "OpG7k0Ru6mPiNOWJZ2W16D-ovzAxUkv8isLv9g5JNsAizX4tTCilgPPYaU1tg24uXkfJex0ixAJ2EfBf85sbUc-lmHGEuOm3iPKOtDSYcVoJSeqnPDNdOu67M1HXEnQebP2J3Y-gBPM=w2400",
    "FLw2zbBu4TCGS1FS8LaZdgXFpaukc6DFom_VOW5p0wqqNQBj_T_DxMGhdkX9Apz1JfVctl_-5IOuzHGOZxny5HEEf6AWYuye42ZdQQQk46VQ7O42YIH3_VZrTgqUKy6pQsHdELy15xg=w2400"
];

base = "https://lh3.googleusercontent.com/",
    secs = 8;

imageArr.forEach(function (img) {
    new Image().src = base + img;
});
// caches images, avoiding white flash between background replacements


function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < imageArr.length; i++) {
        setTimeout(function () {
            document.documentElement.style.background = "url(" + base + imageArr[k] + ") no-repeat center center fixed";
            document.documentElement.style.backgroundSize = "cover";
            document.documentElement.style.backgroundColor = "#1f1f14";
            document.documentElement.style.backgroundBlendMode = "screen";

            if ((k + 1) === imageArr.length) {
                setTimeout(function () {
                    backgroundSequence()
                }, (secs * 1000))
            } else {
                k++;
            }
        }, (secs * 1000) * i)
    }
}

backgroundSequence();
/*******************************************************************************************************************************/

$(document).ready(function () {
    var scroll_start = 0;
    var startChange = $("#about-scrollto");
    var offset = startChange.offset();

    if (startChange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();

            if (scroll_start = offset.top) {
                $(".logo-wrapper").css("opacity", ".2");
            }
        })
    }
})