// deno-lint-ignore-file no-explicit-any

export function hexToRgba(hex: any, bgOpacity: any) {
    let c: any;
  
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
    
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
    
        c = "0x" + c.join("");
    
        return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + "," + bgOpacity / 100 + ")";
    }
  
    throw new Error("Bad Hex");
}