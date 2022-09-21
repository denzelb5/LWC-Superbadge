public with sharing class BoatDataService {
    @AuraEnabled (cacheable=true)
    public static List<BoatType__c> getBoatTypes() {
        return [
            SELECT 
                Id, 
                Name 
            FROM BoatType__c
        ];
    }
   
}
