// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: SubstanceAmount
import * as fhir from '../fhir.js';
/**
 * Reference range of possible or expected values.
 */
export class SubstanceAmountReferenceRange extends fhir.FhirElement {
    /**
     * Default constructor for SubstanceAmountReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['lowLimit']) {
            this.lowLimit = new fhir.Quantity(source.lowLimit);
        }
        if (source['highLimit']) {
            this.highLimit = new fhir.Quantity(source.highLimit);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'SubstanceAmount.referenceRange';
        }
        if (this["lowLimit"]) {
            issues.push(...this.lowLimit.doModelValidation(expression + '.lowLimit'));
        }
        if (this["highLimit"]) {
            issues.push(...this.highLimit.doModelValidation(expression + '.highLimit'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceAmountReferenceRange._fts_dataType = 'SubstanceAmountReferenceRange';
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID.
 */
export class SubstanceAmount extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceAmount - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        if (source['amount']) {
            this.amount = source.amount;
        }
        else if (source['amountQuantity']) {
            this.amount = new fhir.Quantity(source.amountQuantity);
        }
        else if (source['amountRange']) {
            this.amount = new fhir.Range(source.amountRange);
        }
        else if (source['amountString']) {
            this.amount = new fhir.FhirString({ value: source.amountString });
        }
        if (source['amountType']) {
            this.amountType = new fhir.CodeableConcept(source.amountType);
        }
        if (source['amountText']) {
            this.amountText = new fhir.FhirString({ value: source.amountText });
        }
        if (source['_amountText']) {
            if (this.amountText) {
                this.amountText.addExtendedProperties(source._amountText);
            }
            else {
                this.amountText = new fhir.FhirString(source._amountText);
            }
        }
        if (source['referenceRange']) {
            this.referenceRange = new fhir.SubstanceAmountReferenceRange(source.referenceRange);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if (expression === '') {
            expression = 'SubstanceAmount';
        }
        if (this["amountType"]) {
            issues.push(...this.amountType.doModelValidation(expression + '.amountType'));
        }
        if (this["amountText"]) {
            issues.push(...this.amountText.doModelValidation(expression + '.amountText'));
        }
        if (this["referenceRange"]) {
            issues.push(...this.referenceRange.doModelValidation(expression + '.referenceRange'));
        }
        return issues;
    }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
SubstanceAmount._fts_dataType = 'SubstanceAmount';
/**
 * Internal flag to properly serialize choice-type element SubstanceAmount.amount[x]
 */
SubstanceAmount._fts_amountIsChoice = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic3RhbmNlQW1vdW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9TdWJzdGFuY2VBbW91bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBRXBDLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBZ0JuQzs7R0FFRztBQUNILE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxJQUFJLENBQUMsV0FBVztJQWFqRTs7T0FFRztJQUNILFlBQVksU0FBb0QsRUFBRSxFQUFFLFVBQXNDLEVBQUU7UUFDMUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO1FBQy9FLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQUU7SUFDcEYsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsYUFBb0IsRUFBRTtRQUN0RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUFFLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQTtTQUFFO1FBQ3hFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUNsRyxJ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Q0FBQyxVQUFVLEdBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUFFO1FBQ3hHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQUU7UUFDcEgsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFuREQ7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxpQkFBaUIsQ0FBQztBQUt6RTs7R0FFRztBQUN1QixtQ0FBbUIsR0FBUSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgQ29tcGxleFR5cGU6IFN1YnN0YW5jZUFtb3VudFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlyLmpzJztcclxuXHJcbi8qKlxyXG4gKiBWYWxpZCBhcmd1bWVudHMgZm9yIHRoZSBTdWJzdGFuY2VBbW91bnRSZWZlcmVuY2VSYW5nZSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWJzdGFuY2VBbW91bnRSZWZlcmVuY2VSYW5nZUFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJFbGVtZW50QXJncyB7XHJcbiAgLyoqXHJcbiAgICogTG93ZXIgbGltaXQgcG9zc2libGUgb3IgZXhwZWN0ZWQuXHJcbiAgICovXHJcbiAgbG93TGltaXQ/OiBmaGlyLlF1YW50aXR5QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXBwZXIgbGltaXQgcG9zc2libGUgb3IgZXhwZWN0ZWQuXHJcbiAgICovXHJcbiAgaGlnaExpbWl0PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIHJhbmdlIG9mIHBvc3NpYmxlIG9yIGV4cGVjdGVkIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2VBbW91bnRSZWZlcmVuY2VSYW5nZSBleHRlbmRzIGZoaXIuRmhpckVsZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnU3Vic3RhbmNlQW1vdW50UmVmZXJlbmNlUmFuZ2UnO1xyXG4gIC8qKlxyXG4gICAqIExvd2VyIGxpbWl0IHBvc3NpYmxlIG9yIGV4cGVjdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb3dMaW1pdD86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVwcGVyIGxpbWl0IHBvc3NpYmxlIG9yIGV4cGVjdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWdoTGltaXQ/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzdGFuY2VBbW91bnRSZWZlcmVuY2VSYW5nZSAtIGluaXRpYWxpemVzIGFueSByZXF1aXJlZCBlbGVtZW50cyB0byBudWxsIGlmIGEgdmFsdWUgaXMgbm90IHByb3ZpZGVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPFN1YnN0YW5jZUFtb3VudFJlZmVyZW5jZVJhbmdlQXJncz4gPSB7fSwgb3B0aW9uczpmaGlyLkZoaXJDb25zdHJ1Y3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICAgIGlmIChzb3VyY2VbJ2xvd0xpbWl0J10pIHsgdGhpcy5sb3dMaW1pdCA9IG5ldyBmaGlyLlF1YW50aXR5KHNvdXJjZS5sb3dMaW1pdCk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2hpZ2hMaW1pdCddKSB7IHRoaXMuaGlnaExpbWl0ID0gbmV3IGZoaXIuUXVhbnRpdHkoc291cmNlLmhpZ2hMaW1pdCk7IH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKGV4cHJlc3Npb24gPT09ICcnKSB7IGV4cHJlc3Npb24gPSAnU3Vic3RhbmNlQW1vdW50LnJlZmVyZW5jZVJhbmdlJyB9XHJcbiAgICBpZiAodGhpc1tcImxvd0xpbWl0XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMubG93TGltaXQuZG9Nb2RlbFZhbGlkYXRpb24oZXhwcmVzc2lvbisnLmxvd0xpbWl0JykpOyB9XHJcbiAgICBpZiAodGhpc1tcImhpZ2hMaW1pdFwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLmhpZ2hMaW1pdC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuaGlnaExpbWl0JykpOyB9XHJcbiAgICByZXR1cm4gaXNzdWVzO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogVmFsaWQgYXJndW1lbnRzIGZvciB0aGUgU3Vic3RhbmNlQW1vdW50IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnN0YW5jZUFtb3VudEFyZ3MgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudEFyZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FwdHVyZSBxdWFudGl0YXRpdmUgdmFsdWVzIGZvciBhIHZhcmlldHkgb2YgZWxlbWVudHMuIElmIG9ubHkgbGltaXRzIGFyZSBnaXZlbiwgdGhlIGFyaXRobWV0aWMgbWVhbiB3b3VsZCBiZSB0aGUgYXZlcmFnZS4gSWYgb25seSBhIHNpbmdsZSBkZWZpbml0ZSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50IGlzIGdpdmVuLCBpdCB3b3VsZCBiZSBjYXB0dXJlZCBpbiB0aGlzIGZpZWxkLlxyXG4gICAqL1xyXG4gIGFtb3VudD86IGZoaXIuUXVhbnRpdHl8Zmhpci5SYW5nZXxmaGlyLkZoaXJTdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FwdHVyZSBxdWFudGl0YXRpdmUgdmFsdWVzIGZvciBhIHZhcmlldHkgb2YgZWxlbWVudHMuIElmIG9ubHkgbGltaXRzIGFyZSBnaXZlbiwgdGhlIGFyaXRobWV0aWMgbWVhbiB3b3VsZCBiZSB0aGUgYXZlcmFnZS4gSWYgb25seSBhIHNpbmdsZSBkZWZpbml0ZSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50IGlzIGdpdmVuLCBpdCB3b3VsZCBiZSBjYXB0dXJlZCBpbiB0aGlzIGZpZWxkLlxyXG4gICAqL1xyXG4gIGFtb3VudFF1YW50aXR5PzogZmhpci5RdWFudGl0eUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FwdHVyZSBxdWFudGl0YXRpdmUgdmFsdWVzIGZvciBhIHZhcmlldHkgb2YgZWxlbWVudHMuIElmIG9ubHkgbGltaXRzIGFyZSBnaXZlbiwgdGhlIGFyaXRobWV0aWMgbWVhbiB3b3VsZCBiZSB0aGUgYXZlcmFnZS4gSWYgb25seSBhIHNpbmdsZSBkZWZpbml0ZSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50IGlzIGdpdmVuLCBpdCB3b3VsZCBiZSBjYXB0dXJlZCBpbiB0aGlzIGZpZWxkLlxyXG4gICAqL1xyXG4gIGFtb3VudFJhbmdlPzogZmhpci5SYW5nZUFyZ3N8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FwdHVyZSBxdWFudGl0YXRpdmUgdmFsdWVzIGZvciBhIHZhcmlldHkgb2YgZWxlbWVudHMuIElmIG9ubHkgbGltaXRzIGFyZSBnaXZlbiwgdGhlIGFyaXRobWV0aWMgbWVhbiB3b3VsZCBiZSB0aGUgYXZlcmFnZS4gSWYgb25seSBhIHNpbmdsZSBkZWZpbml0ZSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50IGlzIGdpdmVuLCBpdCB3b3VsZCBiZSBjYXB0dXJlZCBpbiB0aGlzIGZpZWxkLlxyXG4gICAqL1xyXG4gIGFtb3VudFN0cmluZz86IGZoaXIuRmhpclN0cmluZ3xzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1vc3QgZWxlbWVudHMgdGhhdCByZXF1aXJlIGEgcXVhbnRpdGF0aXZlIHZhbHVlIHdpbGwgYWxzbyBoYXZlIGEgZmllbGQgY2FsbGVkIGFtb3VudCB0eXBlLiBBbW91bnQgdHlwZSBzaG91bGQgYWx3YXlzIGJlIHNwZWNpZmllZCBiZWNhdXNlIHRoZSBhY3R1YWwgdmFsdWUgb2YgdGhlIGFtb3VudCBpcyBvZnRlbiBkZXBlbmRlbnQgb24gaXQuIEVYQU1QTEU6IEluIGNhcHR1cmluZyB0aGUgYWN0dWFsIHJlbGF0aXZlIGFtb3VudHMgb2Ygc3Vic3RhbmNlcyBvciBtb2xlY3VsYXIgZnJhZ21lbnRzIGl0IGlzIGVzc2VudGlhbCB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBhbW91bnQgcmVmZXJzIHRvIGEgbW9sZSByYXRpbyBvciB3ZWlnaHQgcmF0aW8uIEZvciBhbnkgZ2l2ZW4gZWxlbWVudCBhbiBlZmZvcnQgc2hvdWxkIGJlIG1hZGUgdG8gdXNlIHNhbWUgdGhlIGFtb3VudCB0eXBlIGZvciBhbGwgcmVsYXRlZCBkZWZpbml0aW9uYWwgZWxlbWVudHMuXHJcbiAgICovXHJcbiAgYW1vdW50VHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0QXJnc3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSB0ZXh0dWFsIGNvbW1lbnQgb24gYSBudW1lcmljIHZhbHVlLlxyXG4gICAqL1xyXG4gIGFtb3VudFRleHQ/OiBmaGlyLkZoaXJTdHJpbmd8c3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3Vic3RhbmNlQW1vdW50LmFtb3VudFRleHRcclxuICAgKi9cclxuICBfYW1vdW50VGV4dD86Zmhpci5GaGlyRWxlbWVudEFyZ3M7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHJhbmdlIG9mIHBvc3NpYmxlIG9yIGV4cGVjdGVkIHZhbHVlcy5cclxuICAgKi9cclxuICByZWZlcmVuY2VSYW5nZT86IGZoaXIuU3Vic3RhbmNlQW1vdW50UmVmZXJlbmNlUmFuZ2VBcmdzfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZW1pY2FsIHN1YnN0YW5jZXMgYXJlIGEgc2luZ2xlIHN1YnN0YW5jZSB0eXBlIHdob3NlIHByaW1hcnkgZGVmaW5pbmcgZWxlbWVudCBpcyB0aGUgbW9sZWN1bGFyIHN0cnVjdHVyZS4gQ2hlbWljYWwgc3Vic3RhbmNlcyBzaGFsbCBiZSBkZWZpbmVkIG9uIHRoZSBiYXNpcyBvZiB0aGVpciBjb21wbGV0ZSBjb3ZhbGVudCBtb2xlY3VsYXIgc3RydWN0dXJlOyB0aGUgcHJlc2VuY2Ugb2YgYSBzYWx0IChjb3VudGVyLWlvbikgYW5kL29yIHNvbHZhdGVzICh3YXRlciwgYWxjb2hvbHMpIGlzIGFsc28gY2FwdHVyZWQuIFB1cml0eSwgZ3JhZGUsIHBoeXNpY2FsIGZvcm0gb3IgcGFydGljbGUgc2l6ZSBhcmUgbm90IHRha2VuIGludG8gYWNjb3VudCBpbiB0aGUgZGVmaW5pdGlvbiBvZiBhIGNoZW1pY2FsIHN1YnN0YW5jZSBvciBpbiB0aGUgYXNzaWdubWVudCBvZiBhIFN1YnN0YW5jZSBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJzdGFuY2VBbW91bnQgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7XHJcbiAgLyoqXHJcbiAgICogTWFwcGluZyBvZiB0aGlzIGRhdGF0eXBlIHRvIGEgRkhJUiBlcXVpdmFsZW50XHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX2RhdGFUeXBlOnN0cmluZyA9ICdTdWJzdGFuY2VBbW91bnQnO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FwdHVyZSBxdWFudGl0YXRpdmUgdmFsdWVzIGZvciBhIHZhcmlldHkgb2YgZWxlbWVudHMuIElmIG9ubHkgbGltaXRzIGFyZSBnaXZlbiwgdGhlIGFyaXRobWV0aWMgbWVhbiB3b3VsZCBiZSB0aGUgYXZlcmFnZS4gSWYgb25seSBhIHNpbmdsZSBkZWZpbml0ZSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50IGlzIGdpdmVuLCBpdCB3b3VsZCBiZSBjYXB0dXJlZCBpbiB0aGlzIGZpZWxkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbW91bnQ/OiAoZmhpci5RdWFudGl0eXxmaGlyLlJhbmdlfGZoaXIuRmhpclN0cmluZyl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEludGVybmFsIGZsYWcgdG8gcHJvcGVybHkgc2VyaWFsaXplIGNob2ljZS10eXBlIGVsZW1lbnQgU3Vic3RhbmNlQW1vdW50LmFtb3VudFt4XVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgX2Z0c19hbW91bnRJc0Nob2ljZTp0cnVlID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBNb3N0IGVsZW1lbnRzIHRoYXQgcmVxdWlyZSBhIHF1YW50aXRhdGl2ZSB2YWx1ZSB3aWxsIGFsc28gaGF2ZSBhIGZpZWxkIGNhbGxlZCBhbW91bnQgdHlwZS4gQW1vdW50IHR5cGUgc2hvdWxkIGFsd2F5cyBiZSBzcGVjaWZpZWQgYmVjYXVzZSB0aGUgYWN0dWFsIHZhbHVlIG9mIHRoZSBhbW91bnQgaXMgb2Z0ZW4gZGVwZW5kZW50IG9uIGl0LiBFWEFNUExFOiBJbiBjYXB0dXJpbmcgdGhlIGFjdHVhbCByZWxhdGl2ZSBhbW91bnRzIG9mIHN1YnN0YW5jZXMgb3IgbW9sZWN1bGFyIGZyYWdtZW50cyBpdCBpcyBlc3NlbnRpYWwgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgYW1vdW50IHJlZmVycyB0byBhIG1vbGUgcmF0aW8gb3Igd2VpZ2h0IHJhdGlvLiBGb3IgYW55IGdpdmVuIGVsZW1lbnQgYW4gZWZmb3J0IHNob3VsZCBiZSBtYWRlIHRvIHVzZSBzYW1lIHRoZSBhbW91bnQgdHlwZSBmb3IgYWxsIHJlbGF0ZWQgZGVmaW5pdGlvbmFsIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbW91bnRUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgdGV4dHVhbCBjb21tZW50IG9uIGEgbnVtZXJpYyB2YWx1ZS5cclxuICAgKi9cclxuICBwdWJsaWMgYW1vdW50VGV4dD86IGZoaXIuRmhpclN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHJhbmdlIG9mIHBvc3NpYmxlIG9yIGV4cGVjdGVkIHZhbHVlcy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVmZXJlbmNlUmFuZ2U/OiBmaGlyLlN1YnN0YW5jZUFtb3VudFJlZmVyZW5jZVJhbmdlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yIGZvciBTdWJzdGFuY2VBbW91bnQgLSBpbml0aWFsaXplcyBhbnkgcmVxdWlyZWQgZWxlbWVudHMgdG8gbnVsbCBpZiBhIHZhbHVlIGlzIG5vdCBwcm92aWRlZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6UGFydGlhbDxTdWJzdGFuY2VBbW91bnRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBzdXBlcihzb3VyY2UsIG9wdGlvbnMpO1xyXG4gICAgaWYgKHNvdXJjZVsnYW1vdW50J10pIHsgdGhpcy5hbW91bnQgPSBzb3VyY2UuYW1vdW50OyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Ftb3VudFF1YW50aXR5J10pIHsgdGhpcy5hbW91bnQgPSBuZXcgZmhpci5RdWFudGl0eShzb3VyY2UuYW1vdW50UXVhbnRpdHkpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Ftb3VudFJhbmdlJ10pIHsgdGhpcy5hbW91bnQgPSBuZXcgZmhpci5SYW5nZShzb3VyY2UuYW1vdW50UmFuZ2UpOyB9XHJcbiAgICBlbHNlIGlmIChzb3VyY2VbJ2Ftb3VudFN0cmluZyddKSB7IHRoaXMuYW1vdW50ID0gbmV3IGZoaXIuRmhpclN0cmluZyh7dmFsdWU6IHNvdXJjZS5hbW91bnRTdHJpbmd9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnYW1vdW50VHlwZSddKSB7IHRoaXMuYW1vdW50VHlwZSA9IG5ldyBmaGlyLkNvZGVhYmxlQ29uY2VwdChzb3VyY2UuYW1vdW50VHlwZSk7IH1cclxuICAgIGlmIChzb3VyY2VbJ2Ftb3VudFRleHQnXSkgeyB0aGlzLmFtb3VudFRleHQgPSBuZXcgZmhpci5GaGlyU3RyaW5nKHt2YWx1ZTogc291cmNlLmFtb3VudFRleHR9KTsgfVxyXG4gICAgaWYgKHNvdXJjZVsnX2Ftb3VudFRleHQnXSkge1xyXG4gICAgICBpZiAodGhpcy5hbW91bnRUZXh0KSB7IHRoaXMuYW1vdW50VGV4dC5hZGRFeHRlbmRlZFByb3BlcnRpZXMoc291cmNlLl9hbW91bnRUZXh0ISk7IH1cclxuICAgICAgZWxzZSB7IHRoaXMuYW1vdW50VGV4dCA9IG5ldyBmaGlyLkZoaXJTdHJpbmcoc291cmNlLl9hbW91bnRUZXh0IGFzIFBhcnRpYWw8Zmhpci5GaGlyU3RyaW5nQXJncz4pOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlWydyZWZlcmVuY2VSYW5nZSddKSB7IHRoaXMucmVmZXJlbmNlUmFuZ2UgPSBuZXcgZmhpci5TdWJzdGFuY2VBbW91bnRSZWZlcmVuY2VSYW5nZShzb3VyY2UucmVmZXJlbmNlUmFuZ2UpOyB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmIChleHByZXNzaW9uID09PSAnJykgeyBleHByZXNzaW9uID0gJ1N1YnN0YW5jZUFtb3VudCcgfVxyXG4gICAgaWYgKHRoaXNbXCJhbW91bnRUeXBlXCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYW1vdW50VHlwZS5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuYW1vdW50VHlwZScpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJhbW91bnRUZXh0XCJdKSB7IGlzc3Vlcy5wdXNoKC4uLnRoaXMuYW1vdW50VGV4dC5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKycuYW1vdW50VGV4dCcpKTsgfVxyXG4gICAgaWYgKHRoaXNbXCJyZWZlcmVuY2VSYW5nZVwiXSkgeyBpc3N1ZXMucHVzaCguLi50aGlzLnJlZmVyZW5jZVJhbmdlLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24rJy5yZWZlcmVuY2VSYW5nZScpKTsgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbn1cclxuIl19