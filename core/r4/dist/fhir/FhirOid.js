// Minimum TypeScript Version: 3.7
// FHIR Primitive: oid
import * as fhir from '../fhir.js';
/**
 * RFC 3001. See also ISO/IEC 8824:1990 €
 */
export class FhirOid extends fhir.FhirPrimitive {
    /**
       * Create a FhirOid
       * @param value RFC 3001. See also ISO/IEC 8824:1990 €
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
        if ((this.value !== undefined) && (this.value !== null) && ((this.value === '') || (typeof this.value !== 'string') || (!FhirOid._fts_regex.test(this.value)))) {
            issues.push({ severity: 'error', code: 'invalid', diagnostics: 'Invalid value in primitive type oid', expression: [expression] });
        }
        return issues;
    }
    /**
     * Returns a string representation of a string.
     */
    toString() { return (this.value ?? '').toString(); }
    /**
     * Returns the character at the specified index.
     * @param pos The zero-based index of the desired character.
     */
    charAt(pos) { return (this.value ?? '').charAt(pos); }
    /**
     * Returns the Unicode value of the character at the specified location.
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
     */
    charCodeAt(index) { return (this.value ?? '').charCodeAt(index); }
    /**
     * Returns a string that contains the concatenation of two or more strings.
     * @param strings The strings to append to the end of the string.
     */
    concat(...strings) { return (this.value ?? '').concat(...strings); }
    /**
     * Returns the position of the first occurrence of a substring.
     * @param searchString The substring to search for in the string
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
     */
    indexOf(searchString, position) { return (this.value ?? '').indexOf(searchString, position); }
    /**
     * Returns the last occurrence of a substring in the string.
     * @param searchString The substring to search for.
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
     */
    lastIndexOf(searchString, position) { return (this.value ?? '').lastIndexOf(searchString, position); }
    /**
     * Determines whether two strings are equivalent in the current locale.
     * @param that String to compare to target string
     */
    localeCompare(that) { return (this.value ?? '').localeCompare(that); }
    /**
     * Matches a string with a regular expression, and returns an array containing the results of that search.
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.
     */
    match(regexp) { return (this.value ?? '').match(regexp); }
    /**
     * Replaces text in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    replace(searchValue, replaceValue) { return (this.value ?? '').replace(searchValue, replaceValue); }
    /**
     * Finds the first substring match in a regular expression search.
     * @param regexp The regular expression pattern and applicable flags.
     */
    search(regexp) { return (this.value ?? '').search(regexp); }
    /**
     * Returns a section of a string.
     * @param start The index to the beginning of the specified portion of stringObj.
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
     * If this value is not specified, the substring continues to the end of stringObj.
     */
    slice(start, end) { return (this.value ?? '').slice(start, end); }
    /**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
     * @param limit A value used to limit the number of elements returned in the array.
     */
    split(separator, limit) { return (this.value ?? '').split(separator, limit); }
    /**
     * Returns the substring at the specified location within a String object.
     * @param start The zero-based index number indicating the beginning of the substring.
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
     * If end is omitted, the characters from start through the end of the original string are returned.
     */
    substring(start, end) { return (this.value ?? '').substring(start, end); }
    /**
     * Converts all the alphabetic characters in a string to lowercase.
     */
    toLowerCase() { return (this.value ?? '').toLowerCase(); }
    /**
     * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
     */
    toLocaleLowerCase(locales) { return (this.value ?? '').toLocaleLowerCase(locales); }
    /**
     * Converts all the alphabetic characters in a string to uppercase.
     */
    toUpperCase() { return (this.value ?? '').toUpperCase(); }
    /**
     * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
     */
    toLocaleUpperCase(locales) { return (this.value ?? '').toLocaleUpperCase(locales); }
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim() { return (this.value ?? '').trim(); }
    /**
     * Returns the length of a String object.
     */
    get length() { return this.value?.length ?? 0; }
    ;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { return this.value ?? ''; }
}
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirOid._fts_dataType = 'Oid';
/**
 * Mapping of this datatype to a FHIR equivalent
 */
FhirOid._fts_jsonType = 'string';
// published regex: urn:oid:[0-2](\.(0|[1-9][0-9]*))+
FhirOid._fts_regex = /^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmhpck9pZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXIvRmhpck9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBRXRCLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBWW5DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQVEsU0FBUSxJQUFJLENBQUMsYUFBYTtJQWU3Qzs7Ozs7O01BTUU7SUFDRixZQUFZLFNBQThCLEVBQUUsRUFBRSxVQUFzQyxFQUFHO1FBQ3JGLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNEOztPQUVHO0lBQ2EsaUJBQWlCLENBQUMsYUFBb0IsRUFBRTtRQUN0RCxJQUFJLE1BQU0sR0FBbUIsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5SixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxxQ0FBcUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDbEk7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0Q7O09BRUc7SUFDYyxRQUFRLEtBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFL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Q0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkg7O09BRUc7SUFDSSxXQUFXLEtBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsT0FBd0IsSUFBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkg7O09BRUc7SUFDSSxJQUFJLEtBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFEOztPQUVHO0lBQ0gsSUFBVyxNQUFNLEtBQVksT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQUEsQ0FBQztJQUM5RDs7T0FFRztJQUNhLE9BQU8sS0FBWSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFySTlEOztHQUVHO0FBQzZCLHFCQUFhLEdBQVUsS0FBSyxDQUFDO0FBQzdEOztHQUVHO0FBQzZCLHFCQUFhLEdBQVUsUUFBUSxDQUFDO0FBQ2hFLHFEQUFxRDtBQUNyQixrQkFBVSxHQUFVLHFDQUFxQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFByaW1pdGl2ZTogb2lkXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXIuanMnO1xyXG5cclxuLyoqXHJcbiAqIFJGQyAzMDAxLiBTZWUgYWxzbyBJU08vSUVDIDg4MjQ6MTk5MCDigqxcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmhpck9pZEFyZ3MgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmVBcmdzIHtcclxuICAvKipcclxuICAgKiBSRkMgMzAwMS4gU2VlIGFsc28gSVNPL0lFQyA4ODI0OjE5OTAg4oKsXHJcbiAgICovXHJcbiAgdmFsdWU/OkZoaXJPaWR8c3RyaW5nfHVuZGVmaW5lZHxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUkZDIDMwMDEuIFNlZSBhbHNvIElTTy9JRUMgODgyNDoxOTkwIOKCrFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZoaXJPaWQgZXh0ZW5kcyBmaGlyLkZoaXJQcmltaXRpdmUge1xyXG4gIC8qKlxyXG4gICAqIE1hcHBpbmcgb2YgdGhpcyBkYXRhdHlwZSB0byBhIEZISVIgZXF1aXZhbGVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgcmVhZG9ubHkgX2Z0c19kYXRhVHlwZTpzdHJpbmcgPSAnT2lkJztcclxuICAvKipcclxuICAgKiBNYXBwaW5nIG9mIHRoaXMgZGF0YXR5cGUgdG8gYSBGSElSIGVxdWl2YWxlbnRcclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIHJlYWRvbmx5IF9mdHNfanNvblR5cGU6c3RyaW5nID0gJ3N0cmluZyc7XHJcbiAgLy8gcHVibGlzaGVkIHJlZ2V4OiB1cm46b2lkOlswLTJdKFxcLigwfFsxLTldWzAtOV0qKSkrXHJcbiAgcHVibGljIHN0YXRpYyBvdmVycmlkZSByZWFkb25seSBfZnRzX3JlZ2V4OlJlZ0V4cCA9IC9edXJuOm9pZDpbMC0yXShcXC4oMHxbMS05XVswLTldKikpKyQvXHJcbiAgLyoqXHJcbiAgICogQSBvaWQgdmFsdWUsIHJlcHJlc2VudGVkIGFzIGEgSlMgc3RyaW5nXHJcbiAgICovXHJcbiAgZGVjbGFyZSB2YWx1ZT86c3RyaW5nfG51bGx8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRmhpck9pZFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFJGQyAzMDAxLiBTZWUgYWxzbyBJU08vSUVDIDg4MjQ6MTk5MCDigqxcclxuICAgICAqIEBwYXJhbSBpZCBVbmlxdWUgaWQgZm9yIGludGVyLWVsZW1lbnQgcmVmZXJlbmNpbmcgKHVuY29tbW9uIG9uIHByaW1pdGl2ZXMpXHJcbiAgICAgKiBAcGFyYW0gZXh0ZW5zaW9uIEFkZGl0aW9uYWwgY29udGVudCBkZWZpbmVkIGJ5IGltcGxlbWVudGF0aW9uc1xyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIHRvIGV4dGVuc2lvbiBjb25zdHJ1Y3RvcnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTpQYXJ0aWFsPEZoaXJPaWRBcmdzPiA9IHt9LCBvcHRpb25zOmZoaXIuRmhpckNvbnN0cnVjdG9yT3B0aW9ucyA9IHsgfSApIHtcclxuICAgIHN1cGVyKHNvdXJjZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIHBlcmZvcm0gYmFzaWMgbW9kZWwgdmFsaWRhdGlvbiAoZS5nLiwgY2hlY2sgaWYgcmVxdWlyZWQgZWxlbWVudHMgYXJlIHByZXNlbnQpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvdmVycmlkZSBkb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uOnN0cmluZyA9ICcnKTpmaGlyLkZ0c0lzc3VlW10ge1xyXG4gICAgbGV0IGlzc3VlczpmaGlyLkZ0c0lzc3VlW10gPSBzdXBlci5kb01vZGVsVmFsaWRhdGlvbihleHByZXNzaW9uKTtcclxuICAgIGlmICgodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSAmJiAodGhpcy52YWx1ZSAhPT0gbnVsbCkgJiYgKCh0aGlzLnZhbHVlID09PSAnJykgfHwgKHR5cGVvZiB0aGlzLnZhbHVlICE9PSAnc3RyaW5nJykgfHwgKCFGaGlyT2lkLl9mdHNfcmVnZXgudGVzdCh0aGlzLnZhbHVlKSkpKSB7XHJcbiAgICAgIGlzc3Vlcy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIGNvZGU6ICdpbnZhbGlkJywgZGlhZ25vc3RpY3M6ICdJbnZhbGlkIHZhbHVlIGluIHByaW1pdGl2ZSB0eXBlIG9pZCcsIGV4cHJlc3Npb246IFtleHByZXNzaW9uXX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzc3VlcztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHN0cmluZy5cclxuICAgKi9cclxuICAgcHVibGljIG92ZXJyaWRlIHRvU3RyaW5nKCk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b1N0cmluZygpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cclxuICAgICogQHBhcmFtIHBvcyBUaGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgY2hhckF0KHBvczogbnVtYmVyKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmNoYXJBdChwb3MpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBVbmljb2RlIHZhbHVlIG9mIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbi5cclxuICAgICogQHBhcmFtIGluZGV4IFRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci4gSWYgdGhlcmUgaXMgbm8gY2hhcmFjdGVyIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIE5hTiBpcyByZXR1cm5lZC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBjaGFyQ29kZUF0KGluZGV4OiBudW1iZXIpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuY2hhckNvZGVBdChpbmRleCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0d28gb3IgbW9yZSBzdHJpbmdzLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5ncyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxyXG4gICAgKi9cclxuICAgcHVibGljIGNvbmNhdCguLi5zdHJpbmdzOiBzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5jb25jYXQoLi4uc3RyaW5ncyk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGEgc3Vic3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gc2VhcmNoU3RyaW5nIFRoZSBzdWJzdHJpbmcgdG8gc2VhcmNoIGZvciBpbiB0aGUgc3RyaW5nXHJcbiAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nIHRoZSBTdHJpbmcgb2JqZWN0LiBJZiBvbWl0dGVkLCBzZWFyY2ggc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyBpbmRleE9mKHNlYXJjaFN0cmluZzogc3RyaW5nLCBwb3NpdGlvbj86IG51bWJlcik6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2YgYSBzdWJzdHJpbmcgaW4gdGhlIHN0cmluZy5cclxuICAgICogQHBhcmFtIHNlYXJjaFN0cmluZyBUaGUgc3Vic3RyaW5nIHRvIHNlYXJjaCBmb3IuXHJcbiAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gc2VhcmNoaW5nLiBJZiBvbWl0dGVkLCB0aGUgc2VhcmNoIGJlZ2lucyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbGFzdEluZGV4T2Yoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHBvc2l0aW9uPzogbnVtYmVyKTpudW1iZXIgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLmxhc3RJbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdHdvIHN0cmluZ3MgYXJlIGVxdWl2YWxlbnQgaW4gdGhlIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKiBAcGFyYW0gdGhhdCBTdHJpbmcgdG8gY29tcGFyZSB0byB0YXJnZXQgc3RyaW5nXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbG9jYWxlQ29tcGFyZSh0aGF0OiBzdHJpbmcpOm51bWJlciB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykubG9jYWxlQ29tcGFyZSh0aGF0KTsgfVxyXG4gICAvKipcclxuICAgICogTWF0Y2hlcyBhIHN0cmluZyB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uLCBhbmQgcmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoYXQgc2VhcmNoLlxyXG4gICAgKiBAcGFyYW0gcmVnZXhwIEEgdmFyaWFibGUgbmFtZSBvciBzdHJpbmcgbGl0ZXJhbCBjb250YWluaW5nIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybiBhbmQgZmxhZ3MuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgbWF0Y2gocmVnZXhwOiBzdHJpbmd8UmVnRXhwKTpSZWdFeHBNYXRjaEFycmF5fG51bGwgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLm1hdGNoKHJlZ2V4cCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJlcGxhY2VzIHRleHQgaW4gYSBzdHJpbmcsIHVzaW5nIGEgcmVndWxhciBleHByZXNzaW9uIG9yIHNlYXJjaCBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzZWFyY2hWYWx1ZSBBIHN0cmluZyB0byBzZWFyY2ggZm9yLlxyXG4gICAgKiBAcGFyYW0gcmVwbGFjZVZhbHVlIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcmVwbGFjZSBmb3IgZXZlcnkgc3VjY2Vzc2Z1bCBtYXRjaCBvZiBzZWFyY2hWYWx1ZSBpbiB0aGlzIHN0cmluZy5cclxuICAgICovXHJcbiAgIHB1YmxpYyByZXBsYWNlKHNlYXJjaFZhbHVlOnN0cmluZ3xSZWdFeHAsIHJlcGxhY2VWYWx1ZTpzdHJpbmcpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTsgfVxyXG4gICAvKipcclxuICAgICogRmluZHMgdGhlIGZpcnN0IHN1YnN0cmluZyBtYXRjaCBpbiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzZWFyY2guXHJcbiAgICAqIEBwYXJhbSByZWdleHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuIGFuZCBhcHBsaWNhYmxlIGZsYWdzLlxyXG4gICAgKi9cclxuICAgcHVibGljIHNlYXJjaChyZWdleHA6c3RyaW5nfFJlZ0V4cCk6bnVtYmVyIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS5zZWFyY2gocmVnZXhwKTsgfVxyXG4gICAvKipcclxuICAgICogUmV0dXJucyBhIHNlY3Rpb24gb2YgYSBzdHJpbmcuXHJcbiAgICAqIEBwYXJhbSBzdGFydCBUaGUgaW5kZXggdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgc3BlY2lmaWVkIHBvcnRpb24gb2Ygc3RyaW5nT2JqLlxyXG4gICAgKiBAcGFyYW0gZW5kIFRoZSBpbmRleCB0byB0aGUgZW5kIG9mIHRoZSBzcGVjaWZpZWQgcG9ydGlvbiBvZiBzdHJpbmdPYmouIFRoZSBzdWJzdHJpbmcgaW5jbHVkZXMgdGhlIGNoYXJhY3RlcnMgdXAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLCB0aGUgY2hhcmFjdGVyIGluZGljYXRlZCBieSBlbmQuXHJcbiAgICAqIElmIHRoaXMgdmFsdWUgaXMgbm90IHNwZWNpZmllZCwgdGhlIHN1YnN0cmluZyBjb250aW51ZXMgdG8gdGhlIGVuZCBvZiBzdHJpbmdPYmouXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc2xpY2Uoc3RhcnQ/Om51bWJlciwgZW5kPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc2xpY2Uoc3RhcnQsIGVuZCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFNwbGl0IGEgc3RyaW5nIGludG8gc3Vic3RyaW5ncyB1c2luZyB0aGUgc3BlY2lmaWVkIHNlcGFyYXRvciBhbmQgcmV0dXJuIHRoZW0gYXMgYW4gYXJyYXkuXHJcbiAgICAqIEBwYXJhbSBzZXBhcmF0b3IgQSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGNoYXJhY3RlciBvciBjaGFyYWN0ZXJzIHRvIHVzZSBpbiBzZXBhcmF0aW5nIHRoZSBzdHJpbmcuIElmIG9taXR0ZWQsIGEgc2luZ2xlLWVsZW1lbnQgYXJyYXkgY29udGFpbmluZyB0aGUgZW50aXJlIHN0cmluZyBpcyByZXR1cm5lZC5cclxuICAgICogQHBhcmFtIGxpbWl0IEEgdmFsdWUgdXNlZCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHJldHVybmVkIGluIHRoZSBhcnJheS5cclxuICAgICovXHJcbiAgIHB1YmxpYyBzcGxpdChzZXBhcmF0b3I6c3RyaW5nfFJlZ0V4cCwgbGltaXQ/Om51bWJlcik6c3RyaW5nW10geyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBzdWJzdHJpbmcgYXQgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiB3aXRoaW4gYSBTdHJpbmcgb2JqZWN0LlxyXG4gICAgKiBAcGFyYW0gc3RhcnQgVGhlIHplcm8tYmFzZWQgaW5kZXggbnVtYmVyIGluZGljYXRpbmcgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3Vic3RyaW5nLlxyXG4gICAgKiBAcGFyYW0gZW5kIFplcm8tYmFzZWQgaW5kZXggbnVtYmVyIGluZGljYXRpbmcgdGhlIGVuZCBvZiB0aGUgc3Vic3RyaW5nLiBUaGUgc3Vic3RyaW5nIGluY2x1ZGVzIHRoZSBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZywgdGhlIGNoYXJhY3RlciBpbmRpY2F0ZWQgYnkgZW5kLlxyXG4gICAgKiBJZiBlbmQgaXMgb21pdHRlZCwgdGhlIGNoYXJhY3RlcnMgZnJvbSBzdGFydCB0aHJvdWdoIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIHN0cmluZyBhcmUgcmV0dXJuZWQuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgc3Vic3RyaW5nKHN0YXJ0Om51bWJlciwgZW5kPzpudW1iZXIpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgdGhlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byBsb3dlcmNhc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Mb3dlckNhc2UoKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG93ZXJDYXNlKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIENvbnZlcnRzIGFsbCBhbHBoYWJldGljIGNoYXJhY3RlcnMgdG8gbG93ZXJjYXNlLCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBob3N0IGVudmlyb25tZW50J3MgY3VycmVudCBsb2NhbGUuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9Mb2NhbGVMb3dlckNhc2UobG9jYWxlcz86c3RyaW5nfHN0cmluZ1tdKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvTG9jYWxlTG93ZXJDYXNlKGxvY2FsZXMpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbGwgdGhlIGFscGhhYmV0aWMgY2hhcmFjdGVycyBpbiBhIHN0cmluZyB0byB1cHBlcmNhc2UuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdG9VcHBlckNhc2UoKTpzdHJpbmcgeyByZXR1cm4gKHRoaXMudmFsdWUgPz8gJycpLnRvVXBwZXJDYXNlKCk7IH1cclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgYSBzdHJpbmcgd2hlcmUgYWxsIGFscGhhYmV0aWMgY2hhcmFjdGVycyBoYXZlIGJlZW4gY29udmVydGVkIHRvIHVwcGVyY2FzZSwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaG9zdCBlbnZpcm9ubWVudCdzIGN1cnJlbnQgbG9jYWxlLlxyXG4gICAgKi9cclxuICAgcHVibGljIHRvTG9jYWxlVXBwZXJDYXNlKGxvY2FsZXM/OnN0cmluZ3xzdHJpbmdbXSk6c3RyaW5nIHsgcmV0dXJuICh0aGlzLnZhbHVlID8/ICcnKS50b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGVzKTsgfVxyXG4gICAvKipcclxuICAgICogUmVtb3ZlcyB0aGUgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGUgc3BhY2UgYW5kIGxpbmUgdGVybWluYXRvciBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgdHJpbSgpOnN0cmluZyB7IHJldHVybiAodGhpcy52YWx1ZSA/PyAnJykudHJpbSgpOyB9XHJcbiAgIC8qKlxyXG4gICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgYSBTdHJpbmcgb2JqZWN0LlxyXG4gICAgKi9cclxuICAgcHVibGljIGdldCBsZW5ndGgoKTpudW1iZXIgeyByZXR1cm4gdGhpcy52YWx1ZT8ubGVuZ3RoID8/IDAgfTtcclxuICAgLyoqXHJcbiAgICAqIFJldHVybnMgdGhlIHByaW1pdGl2ZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIG9iamVjdC5cclxuICAgICovXHJcbiAgIHB1YmxpYyBvdmVycmlkZSB2YWx1ZU9mKCk6c3RyaW5nIHsgcmV0dXJuIHRoaXMudmFsdWUgPz8gJyc7IH1cclxuIH1cclxuIl19