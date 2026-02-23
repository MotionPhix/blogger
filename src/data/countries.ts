export interface CountryStat {
  value: string
  label: string
}

export interface CountryData {
  name: string
  flag: string
  city: string
  tagline: string
  heroText: string
  subText: string
  color: string
  accent: string
  phone: string
  email: string
  address: string
  mapLink: string
  stats: CountryStat[]
}

export const countryData: Record<string, CountryData> = {
  MW: {
    name: 'Malawi',
    flag: '🇲🇼',
    city: 'Lilongwe',
    tagline: 'Where It All Began',
    heroText: 'Commanding Attention Across Malawi',
    subText: 'From the shores of Lake Malawi to the heart of Lilongwe — Firstmark dominates the billboard landscape with 500+ premium outdoor sites nationwide.',
    color: '#E63946',
    accent: '#C1121F',
    phone: '+265 999 123 456',
    email: 'mw@firstmark.africa',
    address: 'Area 3, Presidential Way, Lilongwe, Malawi',
    mapLink: 'https://maps.google.com/?q=Lilongwe,Malawi',
    stats: [
      { value: '500+', label: 'Billboard Sites' },
      { value: '15+', label: 'Years Experience' },
      { value: '1,200+', label: 'Campaigns Delivered' },
      { value: '98%', label: 'Client Retention' }
    ]
  },
  ZM: {
    name: 'Zambia',
    flag: '🇿🇲',
    city: 'Lusaka',
    tagline: 'Expanding Horizons',
    heroText: 'Owning the Streets of Zambia',
    subText: 'From Cairo Road to the Copperbelt — Firstmark brings world-class outdoor advertising to Zambia\'s fastest growing markets with unrivalled reach.',
    color: '#2D6A4F',
    accent: '#1B4332',
    phone: '+260 977 123 456',
    email: 'zm@firstmark.africa',
    address: 'Cairo Road, Central Business District, Lusaka, Zambia',
    mapLink: 'https://maps.google.com/?q=Lusaka,Zambia',
    stats: [
      { value: '200+', label: 'Billboard Sites' },
      { value: '5+', label: 'Years in Zambia' },
      { value: '400+', label: 'Campaigns Delivered' },
      { value: '96%', label: 'Client Retention' }
    ]
  },
  ZW: {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    city: 'Harare',
    tagline: 'Making Bold Moves',
    heroText: 'Amplifying Brands Across Zimbabwe',
    subText: 'From Samora Machel Avenue to Bulawayo — Firstmark is Zimbabwe\'s trusted outdoor advertising partner, transforming urban spaces into powerful brand platforms.',
    color: '#FF6B35',
    accent: '#D4490A',
    phone: '+263 77 123 4567',
    email: 'zw@firstmark.africa',
    address: 'Samora Machel Avenue, Harare CBD, Zimbabwe',
    mapLink: 'https://maps.google.com/?q=Harare,Zimbabwe',
    stats: [
      { value: '150+', label: 'Billboard Sites' },
      { value: '3+', label: 'Years in Zimbabwe' },
      { value: '300+', label: 'Campaigns Delivered' },
      { value: '97%', label: 'Client Retention' }
    ]
  }
}
