// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/chargeitem-status|4.0.1
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export const ChargeitemStatusCodes = {
    /**
     * aborted: The processing of the charge was aborted.
     */
    Aborted: "aborted",
    /**
     * billable: The charge item is ready for billing.
     */
    Billable: "billable",
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    Billed: "billed",
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing.
     */
    EnteredInError: "entered-in-error",
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    NotBillable: "not-billable",
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    Planned: "planned",
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlaXRlbVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9DaGFyZ2VpdGVtU3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsc0VBQXNFO0FBRXRFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkM7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGNBQWM7SUFDM0I7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jaGFyZ2VpdGVtLXN0YXR1c3w0LjAuMVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGlkZW50aWZ5aW5nIHRoZSBsaWZlY3ljbGUgc3RhZ2Ugb2YgYSBDaGFyZ2VJdGVtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENoYXJnZWl0ZW1TdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhYm9ydGVkOiBUaGUgcHJvY2Vzc2luZyBvZiB0aGUgY2hhcmdlIHdhcyBhYm9ydGVkLlxyXG4gICAqL1xyXG4gIEFib3J0ZWQ6IFwiYWJvcnRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGJpbGxhYmxlOiBUaGUgY2hhcmdlIGl0ZW0gaXMgcmVhZHkgZm9yIGJpbGxpbmcuXHJcbiAgICovXHJcbiAgQmlsbGFibGU6IFwiYmlsbGFibGVcIixcclxuICAvKipcclxuICAgKiBiaWxsZWQ6IFRoZSBjaGFyZ2UgaXRlbSBoYXMgYmVlbiBiaWxsZWQgKGUuZy4gYSBiaWxsaW5nIGVuZ2luZSBoYXMgZ2VuZXJhdGVkIGZpbmFuY2lhbCB0cmFuc2FjdGlvbnMgYnkgYXBwbHlpbmcgdGhlIGFzc29jaWF0ZWQgcnVsZWQgZm9yIHRoZSBjaGFyZ2UgaXRlbSB0byB0aGUgY29udGV4dCBvZiB0aGUgRW5jb3VudGVyLCBhbmQgcGxhY2VkIHRoZW0gaW50byBDbGFpbXMvSW52b2ljZXMuXHJcbiAgICovXHJcbiAgQmlsbGVkOiBcImJpbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBjaGFyZ2UgaXRlbSBoYXMgYmVlbiBlbnRlcmVkIGluIGVycm9yIGFuZCBzaG91bGQgbm90IGJlIHByb2Nlc3NlZCBmb3IgYmlsbGluZy5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LWJpbGxhYmxlOiBUaGUgY2hhcmdlIGl0ZW0gaGFzIGJlZW4gZGV0ZXJtaW5lZCB0byBiZSBub3QgYmlsbGFibGUgKGUuZy4gZHVlIHRvIHJ1bGVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYmlsbGluZyBjb2RlKS5cclxuICAgKi9cclxuICBOb3RCaWxsYWJsZTogXCJub3QtYmlsbGFibGVcIixcclxuICAvKipcclxuICAgKiBwbGFubmVkOiBUaGUgY2hhcmdlIGl0ZW0gaGFzIGJlZW4gZW50ZXJlZCwgYnV0IHRoZSBjaGFyZ2VkIHNlcnZpY2UgaXMgbm90ICB5ZXQgY29tcGxldGUsIHNvIGl0IHNoYWxsIG5vdCBiZSBiaWxsZWQgeWV0IGJ1dCBtaWdodCBiZSB1c2VkIGluIHRoZSBjb250ZXh0IG9mIHByZS1hdXRob3JpemF0aW9uLlxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IFwicGxhbm5lZFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBhdXRob3Jpbmcgc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2ggb2YgdGhlIHN0YXR1cyB2YWx1ZXMgY3VycmVudGx5IGFwcGxpZXMgZm9yIHRoaXMgY2hhcmdlIGl0ZW0gIE5vdGU6IFRoaXMgY29uY2VwdCBpcyBub3QgdG8gYmUgdXNlZCBmb3IgXCJvdGhlclwiIC0gb25lIG9mIHRoZSBsaXN0ZWQgc3RhdHVzZXMgaXMgcHJlc3VtZWQgdG8gYXBwbHksIGl0J3MganVzdCBub3Qga25vd24gd2hpY2ggb25lLlxyXG4gICAqL1xyXG4gIFVua25vd246IFwidW5rbm93blwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIGlkZW50aWZ5aW5nIHRoZSBsaWZlY3ljbGUgc3RhZ2Ugb2YgYSBDaGFyZ2VJdGVtLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2hhcmdlaXRlbVN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIENoYXJnZWl0ZW1TdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgQ2hhcmdlaXRlbVN0YXR1c0NvZGVzXTtcclxuIl19