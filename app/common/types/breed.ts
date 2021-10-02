export default interface Breed {
    id: string,
    name: string,
    temperament: string,
    life_span: string,
    alt_names: string,
    wikipedia_url: string,
    cfa_url: string,
    country_codes: string,
    description: string,
    image: {
        height: number,
        id: string,
        url: string,
        width: number
    },
    reference_image_id: string,
    indoor: number,
    lap: number,
    vcahospitals_url: string
    vetstreet_url: string,
    origin: string,
    weight: {
        imperial: string,
        metric: string
    }
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    hypoallergenic: number,
    adaptability: number,
    affection_level: number,
    country_code: string,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number
}