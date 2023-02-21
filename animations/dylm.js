var data = [
  [77, 122, 99],
  [48, 82, 84],
  [89, 49, 78],
  [122, 73, 50],
  [78, 68, 73],
  [120, 77, 106],
  [69, 121, 77],
  [84, 73, 120],
  [77, 106, 69],
  [61, 0, 0]
];
// Stage 1: Colors to oct
var part_1_rects = [];
var tempDiv;

data.forEach((val, indx, arr) => {
  tempDiv = document.createElement("div");
  tempDiv.style.width = (600 / data.length).toString() + "px";
  tempDiv.style.height = tempDiv.style.width;
  tempDiv.style.position = "absolute";
  tempDiv.style.top = "0px";
  tempDiv.style.left = ((600 / data.length) * indx).toString() + "px";
  tempDiv.style.background =
    "rgb(" +
    val[0].toString() +
    "," +
    val[1].toString() +
    "," +
    val[2].toString() +
    ")";
  tempDiv.id = "part-1-rect-" + (indx + 1).toString();
  tempDiv.style.borderRadius = "20%";
  part_1_rects.push(tempDiv);
});

part_1_rects.forEach((val, indx, arr) => {
  document.getElementById("canvas").appendChild(val);
});
var part_1_text = document.createElement("span");
part_1_text.style.position = "absolute";
part_1_text.style.fontFamily = "roboto";
part_1_text.style.fontSize = "20pt";
part_1_text.style.bottom = "50px";
part_1_text.style.left = "50px";
part_1_text.style.opacity = 0;

document.getElementById("canvas").appendChild(part_1_text);

var part_1_text_dec = document.createElement("span");
part_1_text_dec.style.position = "absolute";
part_1_text_dec.style.fontFamily = "roboto";
part_1_text_dec.style.fontSize = "20pt";
part_1_text_dec.style.bottom = "50px";
part_1_text_dec.style.left = "50px";
part_1_text_dec.style.opacity = 0;

document.getElementById("canvas").appendChild(part_1_text_dec);

let tl = gsap.timeline({ defaults: { duration: 0.15 } });

function change_part_1_text_to(text) {
  part_1_text.innerHTML = text;
}
function change_part_1_text_dec_to(text) {
  part_1_text_dec.innerHTML = text;
}
function change_part_1_text_result_to(text) {
  part_1_text_result.innerHTML = text;
}
var part_1_result = "";

var part_1_text_result = document.createElement("span");
part_1_text_result.style.position = "absolute";
part_1_text_result.style.fontFamily = "roboto";
part_1_text_result.style.fontSize = "10pt";
part_1_text_result.style.bottom = "10px";
part_1_text_result.style.left = "20px";

document.getElementById("canvas").appendChild(part_1_text_result);

part_1_rects.forEach((val, indx, arr) => {
  tl.to(
    part_1_rects[indx],
    {
      height: (600 / data.length + 100).toString() + "px",
      borderRadius: "0%",
      ease: "power1.out",
      onComplete: () => {
        change_part_1_text_to(
          "[" +
            data[indx][0] +
            ", " +
            data[indx][1] +
            ", " +
            data[indx][2] +
            "]"
        );
        change_part_1_text_dec_to(
          String.fromCharCode(data[indx][0].toString()) +
            String.fromCharCode(data[indx][1].toString()) +
            String.fromCharCode(data[indx][2].toString())
        );
        part_1_result +=
          String.fromCharCode(data[indx][0].toString()) +
          String.fromCharCode(data[indx][1].toString()) +
          String.fromCharCode(data[indx][2].toString());
      }
    },
    "<"
  );
  tl.to(part_1_text, {
    opacity: 1
  });
  tl.to(part_1_text, {
    opacity: 0
  });
  tl.to(
    part_1_text_dec,
    {
      opacity: 1,
      onComplete: () => {
        change_part_1_text_result_to(part_1_result);
      }
    },
    "<"
  );
  tl.to(part_1_text_dec, {
    opacity: 0
  });
  tl.to(part_1_rects[indx], {
    height: (600 / data.length).toString() + "px",
    borderRadius: "15%",
    ease: "power1.out"
  });
});

var part_2_base64_title = document.createElement("span");
part_2_base64_title.style.position = "absolute";
part_2_base64_title.style.fontFamily = "roboto";
part_2_base64_title.style.fontSize = "12pt";
part_2_base64_title.style.bottom = "30px";
part_2_base64_title.style.right = "20px";
part_2_base64_title.style.opacity = 0;
part_2_base64_title.innerHTML = "Base64 Decode";

document.getElementById("canvas").appendChild(part_2_base64_title);

tl.to(part_2_base64_title, {
  delay: 0.5,
  opacity: 1
});
part_1_rects.forEach((val, indx, arr) => {
  tl.to(
    part_1_rects[indx],
    {
      top: "-100px"
    },
    "<"
  );
});

var part_2_base64_decoded = document.createElement("span");
part_2_base64_decoded.style.position = "absolute";
part_2_base64_decoded.style.fontFamily = "roboto";
part_2_base64_decoded.style.fontSize = "10pt";
part_2_base64_decoded.style.bottom = "50px";
part_2_base64_decoded.style.left = "20px";
part_2_base64_decoded.style.opacity = 0;

document.getElementById("canvas").appendChild(part_2_base64_decoded);

tl.to(
  part_2_base64_decoded,
  {
    opacity: 1,
    onStart: () => {
      part_2_base64_decoded.innerHTML = atob(part_1_text_result.innerHTML);
    }
  },
  "<"
);

tl.to(part_1_text_result, {
  opacity: 0,
  delay: 0.5
});

tl.to(
  part_2_base64_decoded,
  {
    bottom: "10px"
  },
  "<"
);

tl.to(
  part_2_base64_title,
  {
    opacity: 0
  },
  "<"
);

var part_3_start = document.createElement("span");
part_3_start.style.position = "absolute";
part_3_start.style.fontFamily = "roboto";
part_3_start.style.fontSize = "10pt";
part_3_start.style.bottom = "10px";
part_3_start.style.left = "20px";
part_3_start.style.opacity = 0;
document.getElementById("canvas").appendChild(part_3_start);

function space(s) {
  // https://www.tutorialspoint.com/javascript-insert-space-after-every-two-letters-in-string
  return s.toString().replace(/.{2}(?=.)/g, "$& ");
}
var hexes = [];
var hex_texts = [];
var temp_hex;

tl.to(part_2_base64_decoded, {
  opacity: 0,
  left: "600px",
  duration: 0.1,
  onStart: () => {
    space(part_2_base64_decoded.innerHTML)
      .split(" ")
      .forEach((val, indx, arr) => {
        hexes.push(val);
        temp_hex = document.createElement("span");
        temp_hex.style.position = "absolute";
        temp_hex.style.fontFamily = "roboto";
        temp_hex.style.fontSize = "10pt";
        temp_hex.style.bottom = "10px";
        temp_hex.style.left = (20 + 20 * indx).toString() + "px";
        temp_hex.style.opacity = 1;
        temp_hex.innerHTML = val;
        hex_texts.push(temp_hex);
      });

    hex_texts.forEach((val, indx, arr) => {
      document.getElementById("canvas").appendChild(hex_texts[indx]);
      tl.from(
        hex_texts[indx],
        {
          opacity: 0
        },
        "<"
      );
    });
  }
});

var part_4_title = document.createElement("span");
part_4_title.style.position = "absolute";
part_4_title.style.fontFamily = "roboto";
part_4_title.style.fontSize = "12pt";
part_4_title.style.bottom = "30px";
part_4_title.style.right = "20px";
part_4_title.style.opacity = 0;
part_4_title.innerHTML = "Hexadecimals to ASCII";

document.getElementById("canvas").appendChild(part_4_title);

var before_ceasar = [];
var before_ceasar_text = [];
var temp_text;

const hex2Char = (hex) => String.fromCharCode(parseInt(hex, 16)); //Michael M. on stack overflow

tl.to(part_4_title, {
  delay: 0.5,
  opacity: 1,
  onComplete: () => {
    hexes.forEach((val, indx, arr) => {
      before_ceasar.push(hex2Char(val));
      temp_text = document.createElement("span");
      temp_text.style.position = "absolute";
      temp_text.style.fontFamily = "roboto";
      temp_text.style.fontSize = "10pt";
      temp_text.style.bottom = "-10px";
      temp_text.style.left = (20 + 20 * indx).toString() + "px";
      temp_text.style.opacity = 0;
      temp_text.innerHTML = hex2Char(val);
      before_ceasar_text.push(temp_text);
    });

    before_ceasar_text.forEach((val, indx, arr) => {
      document.getElementById("canvas").appendChild(before_ceasar_text[indx]);
      tl.to(before_ceasar_text[indx], {
        opacity: 1,
        bottom: "30px"
      });
    });
  }
});
