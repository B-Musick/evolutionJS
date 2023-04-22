/**
 * COmparing SeqRecord -> should compare the objects id's or sometthing like that
 */
export default class SequenceRecord{
    // #sequence; // Sequence object
    #id; // id to identify the sequence
    #name; // Common name for sequence
    #description; // Description of sequence
    #features; // Encapsulate as much info about sequence as possible

    // get sequence() {
    //     return this.#sequence.sequence;
    // }

    // set sequence(seq) {
    //     this.#sequence = seq; 
    // }

    get features() {
        /**
         * List of SequenceFeatures
         */
        return this.#features;
    }

    set features(features) {
        this.#features = features;
    }

    constructor(sequence){
        this.sequence = sequence;
        /**
         * Annotations like
         *  - Source
         *  - Organism
         */
        this.annotations = {}; // Additional info that can be added, public so it can be edited
    }

    genomeString(){
        return this.sequence.sequence;
    }
    /* @TODO constructor(){
         // Should have a constructor which takes in two parameters
         // SequenceRecord(Seq("ACGT"), id="test")
    }*/

    compare(seqrecord2){
        // Compare id, name, etc
    }

    format(file_type){
        /**
         * @TODO
         * Take in a file type and output the formatted information in that file type
         */
    }
}