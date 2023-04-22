import CodonTable from './CodonTable';
export default class Sequence {
    #basePairs;

    constructor(genomeSequence) {
        this.sequence = genomeSequence;
        this.#basePairs = {
            'A': 'T',
            'T': 'A',
            'G': 'C',
            'C': 'G'
        }
    }

    /*****************
     * complement()
     * 
     * Get complement of the sequence. Complement is the attached base pair
     * associated.
     ****************/
    complement() {
        let complement = [];

        for (let i = 0; i < this.sequence.length; i++) {
            // Loop through sequence replacing base with their partner
            complement[i] = this.#basePairs[this.sequence[i]];
        }

        return complement.join('');
    }

    /*****************
     * reverseComplement()
     * 
     * Get complement of the sequence. Complement is the attached base pair
     * associated.
     ****************/
    reverseComplement() {
        // Split into array --> reverse array --> join string back
        return this.complement().split('').reverse().join('');
    }

    gc() {
        /**
         * 100 * float(my_seq.count("G") + my_seq.count("C")) / len(my_seq)
         * Get the percentage of GC out of the whole sequence
         */
        let gCount = parseFloat((this.sequence.match(/g/gi) || []).length);
        let cCount = parseFloat((this.sequence.match(/c/gi) || []).length);
        return 100.0 * (gCount + cCount) / this.sequence.length;
    }

    transcribe() {
        // Since working with coding strand, just need to switch T to U
        return this.sequence.replaceAll('T', 'U');
    }

    backTranscribe() {
        // Go from the mRNA to the coding strand, replace U with T
        return this.sequence.replaceAll('U', 'T');
    }

    // count(subSequence) {
    //     /**
    //      * Take in subsequence and return count of how many times it appears
    //      */
    // }

    /**
     * 
     * @param {*} secondSequence this second sequence will be added to the end
     * 
     * @description determines if secondSequence is a string or Sequence object, then 
     *              concatenates accordingly
     */
    concat(secondSequence){
        if(typeof secondSequence === 'string'){
            this.sequence += secondSequence;
        }else if (secondSequence instanceof Sequence){
            this.sequence += secondSequence.sequence;
        }
    }

    /**
     * @description convert the sequence to uppercase
     */
    toUppercase(){
        this.sequence = this.sequence.toUpperCase()
    }

    /**
    * @description convert the sequence to lowercase
    */
    toLowercase(){
        this.sequence = this.sequence.toLowerCase()
    }

    translate() {
        /**
         * TODO: Implement translation
         */
        let codonObject = new CodonTable();
        let table = codonObject.standard();
        let foundInitiationCodon = false;
        console.log(table["initiation_codon"]);
        // Loop through the sequence, checking 3 consecutive until find the start codon
        let ctr = 0;
        while (!foundInitiationCodon && ctr < this.sequence.length - 2) {
            let currCodon = this.sequence.substring(ctr, ctr + 3);
            if ((currCodon) == table["initiation_codon"]) {
                // If find the initiation code
                foundInitiationCodon = true;
                ctr += 3; // Skip to the start of the first codon in protein sequence
                break; // Stop the while loop
            } else {
                ctr++;
            }

        }

        let foundStopCodon = false;
        let proteinSequence = "";

        if (foundInitiationCodon) {
            // If found initiation codon, start at ctr codon location and read 
            // them in

            while (!foundStopCodon && ctr < this.sequence.length - 2) {
                let currCodonObj = table[this.sequence.substring(ctr, ctr + 3).toLowerCase()];

                if (currCodonObj && currCodonObj.stop_codon) {
                    // If the codon is a stop codon
                    foundStopCodon = true;
                } else {
                    proteinSequence += currCodonObj.letter;
                }
                ctr += 3;
            }
        }

        return proteinSequence;
    }

    // #extractProteinSequence(startIdx) {

    // }
}
