declare function buildError(err: any): {
    code: number;
    message: string;
    details: string[];
} | {
    code: any;
    message: any;
    details?: undefined;
};
export default buildError;
//# sourceMappingURL=build-errors.d.ts.map