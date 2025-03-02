# @lib/countries

The `@lib/countries` package provides a comprehensive solution for handling country-related data in your TypeScript projects. It includes a two-letter country code type, a record of country names, and a utility function to get the country flag emoji by code.

## Updating Country Data

To ensure your country data is up-to-date, follow these steps:

1. **Update the `countries.json` file**: Replace the existing data in the `codegen` directory with the latest country records.
2. **Generate TypeScript Types and Records**: Run the following command to generate the TypeScript types and the country names record:

```sh
pnpm generate
```

This command will create the necessary TypeScript files based on the updated `countries.json` data.

## Usage

### Importing the Country Code Type and Name Record

```ts
import { CountryCode, countryNameRecord } from '@lib/countries'
```

### Getting the Country Flag Emoji

```ts
import { getCountryFlagEmoji } from '@lib/countries/getCountryFlagEmoji'

const emoji = getCountryFlagEmoji('US') // 🇺🇸
```
