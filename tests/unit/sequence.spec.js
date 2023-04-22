import Sequence from "@/classes/Sequence"

let sequence;
let mRna;

beforeEach(()=>{
    sequence = new Sequence("ACTGCTGAC");
    mRna = new Sequence("ACUGCUGAC");
})

describe('Sequence.js', () => {

    test('sequence - gives correct sequence returned', () => {
        expect(sequence.sequence).toBe("ACTGCTGAC")
    })

    test('compelement() - gives correct complement',()=>{
        expect(sequence.complement()).toBe("TGACGACTG")
    })

    test('reverseComplement() - gives correct reverse complement', () => {
        expect(sequence.reverseComplement()).toBe("GTCAGCAGT")
    })

    test('gc() - gives correct percentage of GC in the sequence', ()=>{
        expect(sequence.gc()).toBe(5.0/9.0*100.0)
    })

    test('concat() - ensure one sequence object can be concatenated together using string', () => {
        sequence.concat("GTC")
        expect(sequence.sequence).toBe("ACTGCTGACGTC")
    })

    test('concat() - ensure two sequence objects can be concatenated together using Sequence object', () => {
        var sequenceTwo = new Sequence("GTCA")
        sequence.concat(sequenceTwo)
        expect(sequence.sequence).toBe("ACTGCTGACGTCA")
    })

    test('toLowercase() - ensure the sequence is converted to lowercase', () => {
        sequence.toLowercase()
        expect(sequence.sequence).toBe("actgctgac")
    })

    test('toUppercase() - ensure the sequence is converted to uppercase', () => {
        sequence.toLowercase()
        sequence.toUppercase()
        expect(sequence.sequence).toBe("ACTGCTGAC")
    })

    test('transcribe() - gives correct transcription of T to U in sequence (transcribe sequence into mRNA)', () => {
        expect(sequence.transcribe()).toBe("ACUGCUGAC")
    })

    test('backTranscribe() - Go from the mRNA to the coding strand, replace U with T', ()=>{
        expect(mRna.backTranscribe()).toBe("ACTGCTGAC")
    })
})
