/**
 * Sequence is described by a feature or a location
 * 
 * @TODO Section 4.7
 * Should be able to access from features list print(record.features[20]), then 
 * it should be able to have associated data, and location within gene
 * 
 * "type: gene
    location: [4342:4780](+)
    qualifiers:
        Key: db_xref, Value: ['GeneID:2767712']
        Key: gene, Value: ['pim']
        Key: locus_tag, Value: ['YP_pPCP05']"
 */
class SequenceFeature{
    #type; // Text description of the feature
    #position // This refers to a single position on a sequence, which may be fuzzy or not. For instance, 5, 20,<100 and > 200 are all positions.
    #location; // Location on the sequence you are dealing with
        // Ref - any different reference location, usually None
        // RefDB
        // Strand - 1 = top strand, -1 = bottom strand, 0 for important but unknown, None if doesnt matter
    #strand
    #qualifiers; // Just other information about the feature, one word description, "evidence":"computational" means strand exists computationally but hasnt been discovered
    #sub_features;
    #reference // Will hold a reference object

    constructor(featureLocation, type, strand){

    }

    extract(){

    }
}