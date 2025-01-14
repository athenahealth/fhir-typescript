// Minimum TypeScript Version: 3.7
// FHIR Primitive: unsignedInt
import * as fhir from '../fhir.js';
/**
 * An integer with a value that is not negative (e.g. &gt;= 0)
 */
export class FhirUnsignedInt extends fhir.FhirPrimitive {
    /**
       * Create a FhirUnsignedInt
       * @param value An integer with a value that is not negative (e.g. >= 0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression = '') {
        let issues = super.doModelValidation(expression);
        if ((this.value !== undefined) && (this.value !== null) && ((typeof this.value !== 'number') || (!Number.isInteger(this.value)) || (this.value < 0) || (!FhirUnsignedInt._fts_regex.test(this.value.toString())))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type unsignedInt', expression: [expression] });
        }
        return issues;
    }
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix) { return (this.value ?? NaN).toString(radix); }
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits) { return (this.value ?? NaN).toFixed(fractionDigits); }
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits) { return (this.value ?? NaN).toExponential(fractionDigits); }
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision) { return (this.value ?? NaN).toPrecision(precision); }
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { return (this.value ?? NaN); }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirUnsignedInt._fts_dataType = 'UnsignedInt';
/**
 * Mapping of this datatype to a JSON equivalent
 */
FhirUnsignedInt._fts_jsonType = 'number';
// published regex: [0]|([1-9][0-9]*)
FhirUnsignedInt._fts_regex = /^[0]|([1-9][0-9]*)$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpclVuc2lnbmVkSW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpci9GaGlyVW5zaWduZWRJbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUU5QixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQVluQzs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFnQixTQUFRLElBQUksQ0FBQyxhQUFhO0lBZXJEOzs7Ozs7TUFNRTtJQUNGLFlBQVksU0FBc0MsRUFBRSxFQUFFLFVBQXNDLEVBQUc7UUFDN0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0Q7O09BRUc7SUFDYSxpQkFBaUIsQ0FBQyxhQUFvQixFQUFFO1FBQ3RELElBQUksTUFBTSxHQUFtQixLQUFLLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pOLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLDZDQUE2QyxFQUFFLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUMxSTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRDs7O09BR0c7SUFDYyxRQUFRLENBQUMsS0FBYSxJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUY7OztPQUdHO0lBQ0ksT0FBTyxDQUFDLGNBQXNCLElBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRzs7O09BR0c7SUFDSSxhQUFhLENBQUMsY0FBc0IsSUFBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pIOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxTQUFpQixJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkc7O09BRUc7SUFDYSxPQUFPLEtBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQXpEakU7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxhQUFhLENBQUM7QUFDckU7O0dBRUc7QUFDNkIsNkJBQWEsR0FBVSxRQUFRLENBQUM7QUFDaEUscUNBQXFDO0FBQ0wsMEJBQVUsR0FBVSxxQkFBcUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBQcmltaXRpdmU6IHVuc2lnbmVkSW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVnZXIgd2l0aCBhIHZhbHVlIHRoYXQgaXMgbm90IG5lZ2F0aXZlIChlLmcuICZndDs9IDApXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZoaXJVbnNpZ25lZEludEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBBbiBpbnRlZ2VyIHdpdGggYSB2YWx1ZSB0aGF0IGlzIG5vdCBuZWdhdGl2ZSAoZS5nLiAmZ3Q7PSAwKVxyXG4gICAqL1xyXG4gIHZhbHVlPzpGaGlyVW5zaWduZWRJbnR8bnVtYmVyfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQW4gaW50ZWdlciB3aXRoIGEgdmFsdWUgdGhhdCBpcyBub3QgbmVnYXRpdmUgKGUuZy4gJmd0Oz0gMClcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGaGlyVW5zaWduZWRJbnQgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnVW5zaWduZWRJbnQnO1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEpTT04gZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19qc29uVHlwZTpzdHJpbmcgPSAnbnVtYmVyJztcclxuICAvLyBwdWJsaXNoZWQgcmVnZXg6IFswXXwoWzEtOV1bMC05XSopXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC9eWzBdfChbMS05XVswLTldKikkL1xyXG4gIC8qKlxyXG4gICAqIEEgdW5zaWduZWRJbnQgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgbnVtYmVyXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86bnVtYmVyfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpclVuc2lnbmVkSW50XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQW4gaW50ZWdlciB3aXRoIGEgdmFsdWUgdGhhdCBpcyBub3QgbmVnYXRpdmUgKGUuZy4gPj0gMClcclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJVbnNpZ25lZEludEFyZ3M+ID0ge30sIG9wdGlvbnM6Zmhpci5GaGlyQ29uc3RydWN0b3JPcHRpb25zID0geyB9ICkge1xyXG4gICAgc3VwZXIoc291cmNlLCBvcHRpb25zKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gcGVyZm9ybSBiYXNpYyBtb2RlbCB2YWxpZGF0aW9uIChlLmcuLCBjaGVjayBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmUgcHJlc2VudCkuXHJcbiAgICovXHJcbiAgcHVibGljIG92ZXJyaWRlIGRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb246c3RyaW5nID0gJycpOmZoaXIuRnRzSXNzdWVbXSB7XHJcbiAgICBsZXQgaXNzdWVzOmZoaXIuRnRzSXNzdWVbXSA9IHN1cGVyLmRvTW9kZWxWYWxpZGF0aW9uKGV4cHJlc3Npb24pO1xyXG4gICAgaWYgKCh0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpICYmICh0aGlzLnZhbHVlICE9PSBudWxsKSAmJiAoKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnbnVtYmVyJykgfHwgKCFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMudmFsdWUpKSB8fCAodGhpcy52YWx1ZSA8IDApIHx8ICghRmhpclVuc2lnbmVkSW50Ll9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSkpIHtcclxuICAgICAgaXNzdWVzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgY29kZTogJ2ludmFsaWQnLCBkaWFnbm9zdGljczogJ0ludmFsaWQgdmFsdWUgaW4gcHJpbWl0aXZlIHR5cGUgdW5zaWduZWRJbnQnLCBleHByZXNzaW9uOiBbZXhwcmVzc2lvbl19KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc3N1ZXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSByYWRpeCBTcGVjaWZpZXMgYSByYWRpeCBmb3IgY29udmVydGluZyBudW1lcmljIHZhbHVlcyB0byBzdHJpbmdzLiBUaGlzIHZhbHVlIGlzIG9ubHkgdXNlZCBmb3IgbnVtYmVycy5cclxuICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKHJhZGl4PzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvU3RyaW5nKHJhZGl4KTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBudW1iZXIgaW4gZml4ZWQtcG9pbnQgbm90YXRpb24uXHJcbiAgICAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBNdXN0IGJlIGluIHRoZSByYW5nZSAwIC0gMjAsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBudW1iZXIgcmVwcmVzZW50ZWQgaW4gZXhwb25lbnRpYWwgbm90YXRpb24uXHJcbiAgICAqIEBwYXJhbSBmcmFjdGlvbkRpZ2l0cyBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBNdXN0IGJlIGluIHRoZSByYW5nZSAwIC0gMjAsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b0V4cG9uZW50aWFsKGZyYWN0aW9uRGlnaXRzPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyBOYU4pLnRvRXhwb25lbnRpYWwoZnJhY3Rpb25EaWdpdHMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSBudW1iZXIgcmVwcmVzZW50ZWQgZWl0aGVyIGluIGV4cG9uZW50aWFsIG9yIGZpeGVkLXBvaW50IG5vdGF0aW9uIHdpdGggYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRpZ2l0cy5cclxuICAgICogQHBhcmFtIHByZWNpc2lvbiBOdW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzLiBNdXN0IGJlIGluIHRoZSByYW5nZSAxIC0gMjEsIGluY2x1c2l2ZS5cclxuICAgICovXHJcbiAgIHB1YmxpYyB0b1ByZWNpc2lvbihwcmVjaXNpb24/Om51bWJlcik6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/IE5hTikudG9QcmVjaXNpb24ocHJlY2lzaW9uKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHZhbHVlT2YoKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gTmFOKTsgfVxyXG59XHJcbiJdfQ==