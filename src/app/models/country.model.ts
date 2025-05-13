export interface ICountry {
    name: ICountryDetailAboutName;
    capital: string;
    population: number;
    area: number;
    region: string;
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
}


export interface ICountryDetailAboutName {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        }
    }
}

