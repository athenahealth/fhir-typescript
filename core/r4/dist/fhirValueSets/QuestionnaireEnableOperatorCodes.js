// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.0.1
/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorCodes = {
    /**
     * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
     */
    NotEquals: "!=",
    /**
     * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
     */
    LessThan: "<",
    /**
     * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
     */
    LessOrEquals: "<=",
    /**
     * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
     */
    Equals: "=",
    /**
     * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
     */
    GreaterThan: ">",
    /**
     * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
     */
    GreaterOrEquals: ">=",
    /**
     * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
     */
    Exists: "exists",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1F1ZXN0aW9ubmFpcmVFbmFibGVPcGVyYXRvckNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGtGQUFrRjtBQUVsRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHO0lBQzlDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUk7SUFDZjs7T0FFRztJQUNILFFBQVEsRUFBRSxHQUFHO0lBQ2I7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSTtJQUNsQjs7T0FFRztJQUNILE1BQU0sRUFBRSxHQUFHO0lBQ1g7O09BRUc7SUFDSCxXQUFXLEVBQUUsR0FBRztJQUNoQjs7T0FFRztJQUNILGVBQWUsRUFBRSxJQUFJO0lBQ3JCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7Q0FDUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3F1ZXN0aW9ubmFpcmUtZW5hYmxlLW9wZXJhdG9yfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhlIGNyaXRlcmlhIGJ5IHdoaWNoIGEgcXVlc3Rpb24gaXMgZW5hYmxlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWVzdGlvbm5haXJlRW5hYmxlT3BlcmF0b3JDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiAhPTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBOb3RFcXVhbHM6IFwiIT1cIixcclxuICAvKipcclxuICAgKiAmbHQ7OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgbm8gYW5zd2VyIGhhcyBhIHZhbHVlIHRoYXQgaXMgbGVzcyB0aGFuIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBMZXNzVGhhbjogXCI8XCIsXHJcbiAgLyoqXHJcbiAgICogJmx0Oz06IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBsZXNzIG9yIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBMZXNzT3JFcXVhbHM6IFwiPD1cIixcclxuICAvKipcclxuICAgKiA9OiBUcnVlIGlmIHdoZXRoZXIgYXQgbGVhc3Qgb25lIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGVxdWFsIHRvIHRoZSBlbmFibGVXaGVuIGFuc3dlci5cclxuICAgKi9cclxuICBFcXVhbHM6IFwiPVwiLFxyXG4gIC8qKlxyXG4gICAqICZndDs6IFRydWUgaWYgd2hldGhlciBhdCBsZWFzdCBubyBhbnN3ZXIgaGFzIGEgdmFsdWUgdGhhdCBpcyBncmVhdGVyIHRoYW4gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJUaGFuOiBcIj5cIixcclxuICAvKipcclxuICAgKiAmZ3Q7PTogVHJ1ZSBpZiB3aGV0aGVyIGF0IGxlYXN0IG5vIGFuc3dlciBoYXMgYSB2YWx1ZSB0aGF0IGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyLlxyXG4gICAqL1xyXG4gIEdyZWF0ZXJPckVxdWFsczogXCI+PVwiLFxyXG4gIC8qKlxyXG4gICAqIGV4aXN0czogVHJ1ZSBpZiB3aGV0aGVyIGFuIGFuc3dlciBleGlzdHMgaXMgZXF1YWwgdG8gdGhlIGVuYWJsZVdoZW4gYW5zd2VyICh3aGljaCBtdXN0IGJlIGEgYm9vbGVhbikuXHJcbiAgICovXHJcbiAgRXhpc3RzOiBcImV4aXN0c1wiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjcml0ZXJpYSBieSB3aGljaCBhIHF1ZXN0aW9uIGlzIGVuYWJsZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBRdWVzdGlvbm5haXJlRW5hYmxlT3BlcmF0b3JDb2RlVHlwZSA9IHR5cGVvZiBRdWVzdGlvbm5haXJlRW5hYmxlT3BlcmF0b3JDb2Rlc1trZXlvZiB0eXBlb2YgUXVlc3Rpb25uYWlyZUVuYWJsZU9wZXJhdG9yQ29kZXNdO1xyXG4iXX0=