import Sequence from './Sequence';
import SequenceRecord from './SequenceRecord';

export default class SequenceIO{
    // constructor(){

    // }

    /**
     * Reads sequences as SequenceRecord Objects
     * 
     * @param {string} fileName - The name of the file
     * @param {string} format - Format of the file ('fasta', 'genbank', etc)
     * 
     * @return {Array [SeqRecord]}
     */
    parse(file, format, extractedObjects) {
        let extractedFastaObjects = [];

        let genomeIdFullRegex = /^>[a-z].*/;
        // This will match the id value "gi|2765658|emb|Z78533.1|CIZ78533"
        let genomeIdRegex = /[a-z][A-Za-z0-9|.]*[^\s]/;

        let genomeRegex = /^[A-Z]/i;
        let fileArray = file.split('\n');

        // If match the genome ID, then the next lines will be the genome until
        // reach an empty line
        let genomeObject = {}; // Hold the genome object
        let newGenome = false;
        let genomeString = "";

        fileArray.forEach(line => {
            if (!newGenome && genomeIdFullRegex.test(line)) {
                genomeObject = {}; // Create new object
                genomeString = "";

                // If it is the header
                newGenome = true; // New genome object is started
                genomeObject.id = line.match(genomeIdRegex)[0];
            }
            else if (genomeRegex.test(line)) {
                // If it is a genome, then add it to the genome string
                genomeString += line;

            } else if (!line) {
                // If a blank line, then the genome object has been created
                genomeObject.sequence = genomeString;
                let seq = new Sequence(genomeString); // Create sequence object
                let seqRecord = new SequenceRecord(seq); // Create sequence record with Sequence object
                seqRecord.annotations["description"] = "Hi there this is a description";
                // console.log("Normal: " + seq.sequence);
                // console.log("Complement: " + seq.complement());
                // console.log("Reverse Complement: " + seq.reverseComplement());
                // console.log("Transcribe: " + seq.transcribe());
                // console.log("Translation: " + seq.translate());
                console.log("SeqRecord: " + seqRecord.genomeString());
                // console.log("Annotations: " + seqRecord.annotations["description"]);


                // console.log("GC: "+seq.gc());
                newGenome == false;
                extractedFastaObjects.push(seqRecord);
            }
        });
        // console.log(extractedFastaObjects);
        return extractedFastaObjects;
    }
}