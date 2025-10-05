const kalkulator = (a,b, arit) => {
    if (arit === "tambah") {
        return a + b;
    }else if (arit === "kurang") {
        return a - b;
    }else if (arit === "kali") {
        return a * b;
    }else if (arit === "bagi") {
        return a / b;
    }else if (arit === "modulus") {
        return a % b;
    }else if (arit === "pangkat") {
        return a ** b;
    }
}

let a = 11;
let b = 4 ;
console.log("Mini Kalkulator");
console.log(`Variabel angkanya yaitu ${a} dan ${b}`);
console.log(`Pertambahan dari ${a} + ${b} = ${kalkulator(a, b, "tambah")}`);
console.log(`Pengurangan dari ${a} - ${b} = ${kalkulator(a, b, "kurang")}`);
console.log(`Perkalian dari ${a} * ${b} = ${kalkulator(a, b, "kali")}`);
console.log(`Pembagian dari ${a} / ${b} = ${kalkulator(a, b, "bagi")}`);
console.log(`Perpangkatan dari ${a}^${b} = ${kalkulator(a, b, "pangkat")}`);
console.log(`Modulus dari ${a} % ${b} = ${kalkulator(a, b, "modulus")}`);