
export default class CodonTable{
    constructor(){
        this.standardTable = {
            "initiation_codon": "ATG",

            "ttt": { "name": "Phenylalanine", "short_name": "Phe", "letter": "F" },
            "ttc": {
                "name": "Phenylalanine",
                "short_name": "Phe",
                "letter": "F"
            },
            "tta": { "name": "", "short_name": "", "letter": "" },
            "ttg": {
                "name": "Leucine",
                "short_name": "Leu",
                "letter": "L"
            },
            "ctt": {
                "name": "Leucine",
                "short_name": "Leu",
                "letter": "L"
            },
            "ctc": {
                "name": "Leucine",
                "short_name": "Leu",
                "letter": "L"
            },
            "cta": {
                "name": "Leucine",
                "short_name": "Leu",
                "letter": "L"
            },
            "ctg": {
                "name": "Leucine",
                "short_name": "Leu",
                "letter": "L"
            },
            "att": {
                "name": "Isoleucine",
                "short_name": "Iso",
                "letter": ""
            },
            "atc": {
                "name": "Isoleucine",
                "short_name": "Iso",
                "letter": ""
            },
            "ata": {
                "name": "Isoleucine",
                "short_name": "Iso",
                "letter": ""
            },
            "atg": {
                "name": "Methionine",
                "short_name": "Met",
                "letter": "M"
            },
            "gtt": {
                "name": "Valine",
                "short_name": "Val",
                "letter": "V"
            },
            "gtc": {
                "name": "Valine",
                "short_name": "Val",
                "letter": "V"
            },
            "gta": {
                "name": "Valine",
                "short_name": "Val",
                "letter": "V"
            },
            "gtg": {
                "name": "Valine",
                "short_name": "Val",
                "letter": "V"
            },
            "tct": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "tcc": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "tca": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "tcg": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "cct": {
                "name": "Proline",
                "short_name": "Pro",
                "letter": "P"
            },
            "ccc": {
                "name": "Proline",
                "short_name": "Pro",
                "letter": "P"
            },
            "cca": {
                "name": "Proline",
                "short_name": "Pro",
                "letter": "P"
            },
            "ccg": {
                "name": "Proline",
                "short_name": "Pro",
                "letter": "P"
            },
            "act": {
                "name": "Threonine",
                "short_name": "Thr",
                "letter": "T"
            },
            "acc": {
                "name": "Threonine",
                "short_name": "Thr",
                "letter": "T"
            },
            "aca": {
                "name": "Threonine",
                "short_name": "Thr",
                "letter": "T"
            },
            "acg": {
                "name": "Threonine",
                "short_name": "Thr",
                "letter": "T"
            },
            "gct": {
                "name": "Alanine",
                "short_name": "Ala",
                "letter": "A"
            },
            "gcc": {
                "name": "Alanine",
                "short_name": "Ala",
                "letter": "A"
            },
            "gca": {
                "name": "Alanine",
                "short_name": "Ala",
                "letter": "A"
            },
            "gcg": {
                "name": "Alanine",
                "short_name": "Ala",
                "letter": "A"
            },
            "tat": {
                "name": "Tyrosine",
                "short_name": "Tyr",
                "letter": "Y"
            },
            "tac": {
                "name": "Tyrosine",
                "short_name": "Tyr",
                "letter": "Y"
            },
            "taa": {
                "name": "Ochre",
                "stop_codon": "true",
                
            },
            "tag": {
                "name": "Amber",
                "stop_codon": "true",
            },
            "cat": {
                "name": "Histidine",
                "short_name": "His",
                "letter": "H"
            },
            "cac": {
                "name": "Histidine",
                "short_name": "His",
                "letter": "H"
            },
            "caa": {
                "name": "Glutamine",
                "short_name": "Gln",
                "letter": "Q"
            },
            "cag": {
                "name": "Glutamine",
                "short_name": "Gln",
                "letter": "Q"
            },
            "aat": {
                "name": "Asparagine",
                "short_name": "Asn",
                "letter": "N"
            },
            "aac": {
                "name": "Asparagine",
                "short_name": "Asn",
                "letter": "N"
            },
            "aaa": {
                "name": "Lysine",
                "short_name": "Lys",
                "letter": "K"
            },
            "aag": {
                "name": "Lysine",
                "short_name": "Lys",
                "letter": "K"
            },
            "gat": {
                "name": "Aspartic Acid",
                "short_name": "Asp",
                "letter": "D"
            },
            "gac": {
                "name": "Aspartic Acid",
                "short_name": "Asp",
                "letter": "D"
            },
            "gaa": {
                "name": "Glutamic Acid",
                "short_name": "Glu",
                "letter": "E"
            },
            "gag": {
                "name": "Glutamic Acid",
                "short_name": "Glu",
                "letter": "E"
            },
            "tgt": {
                "name": "Cysteine",
                "short_name": "Cys",
                "letter": "C"
            },
            "tgc": {
                "name": "Cysteine",
                "short_name": "Cys",
                "letter": "C"
            },
            "tga": {
                "name": "Opal",
                "stop_codon":"true"
            },
            "tgg": {
                "name": "tryptophan",
                "short_name": "Trp",
                "letter": "W"
            },
            "cgt": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "cgc": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "cga": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "cgg": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "agt": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "agc": {
                "name": "Serine",
                "short_name": "Ser",
                "letter": "S"
            },
            "aga": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "agg": {
                "name": "Arginine",
                "short_name": "Arg",
                "letter": "R"
            },
            "ggt": {
                "name": "Glycine",
                "short_name": "Gly",
                "letter": "G"
            },
            "ggc": {
                "name": "Glycine",
                "short_name": "Gly",
                "letter": "G"
            },
            "gga": {
                "name": "Glycine",
                "short_name": "Gly",
                "letter": "G"
            },
            "ggg": {
                "name": "Glycine",
                "short_name": "Gly",
                "letter": "G"
            }
        }
    }

    standard(){
        return this.standardTable;
    }

}