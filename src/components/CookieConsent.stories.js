export default {
    title: "Cookie Consent",
    argTypes: {
        hide: {
            control: "boolean"
        }
    }
}

export const CookieConsent = (arg, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: "<CookieConsent v-bind='$props'/>"
});