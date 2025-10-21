# CourtListener API Integration Guide

## Overview
This document provides comprehensive information about the CourtListener API integration in the Civil Rights Legal Tool.

## Authentication
**Authorization Token**: Stored in `VITE_COURTLISTENER_API_KEY` environment variable

### Authentication Method
```bash
Authorization: Token YOUR_API_KEY_HERE
```

## API Endpoints

### Base URL
```
https://www.courtlistener.com/api/rest/v4/
```

### Available Endpoints

#### 1. **Opinions API**
- **Endpoint**: `/api/rest/v4/opinions/`
- **Purpose**: Access individual court opinions
- **Filters**: 
  - `cluster__docket__court` - Filter by court
  - `cited_opinion` - Find opinions citing a specific opinion
  - `date_filed` - Filter by filing date
  - `type` - Opinion type (lead, concurrence, dissent, etc.)

#### 2. **Clusters API**
- **Endpoint**: `/api/rest/v4/clusters/`
- **Purpose**: Access opinion clusters (groups of related opinions)
- **Filters**:
  - `docket__court` - Filter by court
  - `date_filed` - Filter by filing date
  - `case_name` - Search by case name
  - `precedential_status` - Published, Unpublished, etc.

#### 3. **Dockets API**
- **Endpoint**: `/api/rest/v4/dockets/`
- **Purpose**: Access case dockets
- **Filters**:
  - `court` - Filter by court ID
  - `id` - Docket ID
  - `date_filed` - Filing date
  - `docket_number` - Case docket number

#### 4. **Courts API**
- **Endpoint**: `/api/rest/v4/courts/`
- **Purpose**: Get court information
- **Filters**:
  - `id` - Court ID (e.g., 'scotus', 'ca1', 'ca2')
  - `jurisdiction` - Court jurisdiction (F, FD, FB, etc.)
  - `full_name` - Court full name

#### 5. **Search API**
- **Endpoint**: `/api/rest/v4/search/`
- **Purpose**: Advanced search across all content
- **Parameters**:
  - `q` - Search query
  - `type` - Content type (o=opinions, r=recap, oa=oral arguments)
  - `order_by` - Sort order

## Rate Limits
- **Authenticated Users**: 5,000 queries per hour
- **Anonymous Users**: Much lower (not recommended)

## Filtering Examples

### 1. Get Supreme Court Cases
```bash
curl "https://www.courtlistener.com/api/rest/v4/opinions/?cluster__docket__court=scotus" \
  --header 'Authorization: Token 868e4ddf04497269550c58f0bd6c92242af7e34b'
```

### 2. Get Cases by Date Range
```bash
curl "https://www.courtlistener.com/api/rest/v4/clusters/?date_filed__gte=2020-01-01&date_filed__lte=2023-12-31" \
  --header 'Authorization: Token 868e4ddf04497269550c58f0bd6c92242af7e34b'
```

### 3. Search for Civil Rights Cases
```bash
curl "https://www.courtlistener.com/api/rest/v4/search/?q=civil+rights&type=o" \
  --header 'Authorization: Token 868e4ddf04497269550c58f0bd6c92242af7e34b'
```

### 4. Get Cases from Specific Circuit
```bash
curl "https://www.courtlistener.com/api/rest/v4/opinions/?cluster__docket__court=ca2" \
  --header 'Authorization: Token 868e4ddf04497269550c58f0bd6c92242af7e34b'
```

## Filter Operators

### Comparison Operators
- `exact` - Exact match
- `gte` - Greater than or equal
- `gt` - Greater than
- `lte` - Less than or equal
- `lt` - Less than
- `range` - Range (inclusive)

### Text Operators
- `startswith` - Starts with
- `endswith` - Ends with
- `contains` - Contains
- `icontains` - Case-insensitive contains

### Example Usage
```bash
# Get dockets with ID greater than 500
curl "https://www.courtlistener.com/api/rest/v4/dockets/?id__gt=500"

# Get cases filed in 2023
curl "https://www.courtlistener.com/api/rest/v4/clusters/?date_filed__range=2023-01-01,2023-12-31"

# Get courts starting with "United States Court"
curl "https://www.courtlistener.com/api/rest/v4/courts/?full_name__startswith=United+States+Court"
```

## Pagination

### Standard Pagination
- Use `page` parameter for basic pagination (limited to 100 pages)
- Example: `?page=2`

### Deep Pagination (Cursor-based)
- Use `cursor` parameter for deep pagination
- Available when ordering by `id`, `date_modified`, or `date_created`
- Follow `next` and `previous` URLs in response

### Example Response
```json
{
  "count": "https://www.courtlistener.com/api/rest/v4/opinions/?count=on",
  "next": "https://www.courtlistener.com/api/rest/v4/opinions/?cursor=2",
  "previous": null,
  "results": [...]
}
```

## Field Selection

### Optimize Requests
Use `fields` parameter to select only needed fields:
```bash
curl "https://www.courtlistener.com/api/rest/v4/opinions/?fields=case_name,date_filed,court"
```

### Omit Fields
Use `omit` parameter to exclude fields:
```bash
curl "https://www.courtlistener.com/api/rest/v4/opinions/?omit=html,html_with_citations"
```

## Ordering

### Available Fields
Check OPTIONS request to see orderable fields:
```bash
curl -X OPTIONS "https://www.courtlistener.com/api/rest/v4/opinions/"
```

### Order Examples
```bash
# Most recent first
curl "https://www.courtlistener.com/api/rest/v4/opinions/?order_by=-date_filed"

# Oldest first
curl "https://www.courtlistener.com/api/rest/v4/opinions/?order_by=date_filed"

# Multiple fields
curl "https://www.courtlistener.com/api/rest/v4/opinions/?order_by=-date_filed,id"
```

## Court IDs

### Supreme Court
- `scotus` - Supreme Court of the United States

### Federal Circuit Courts
- `ca1` - 1st Circuit
- `ca2` - 2nd Circuit
- `ca3` - 3rd Circuit
- `ca4` - 4th Circuit
- `ca5` - 5th Circuit
- `ca6` - 6th Circuit
- `ca7` - 7th Circuit
- `ca8` - 8th Circuit
- `ca9` - 9th Circuit
- `ca10` - 10th Circuit
- `ca11` - 11th Circuit
- `cadc` - D.C. Circuit
- `cafc` - Federal Circuit

### Federal District Courts
- Format: `{state}{district}` (e.g., `nysd` for Southern District of New York)

## Performance Tips

1. **Use Field Selection**: Only request fields you need
2. **Avoid Unnecessary Joins**: Use `court=xyz` instead of `court__id=xyz`
3. **Limit Result Sets**: Use precise queries when possible
4. **Use Cursor Pagination**: For large result sets
5. **Cache Results**: Store frequently accessed data locally

## Error Handling

### Common Errors
- `401 Unauthorized` - Invalid or missing token
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource doesn't exist
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

### Example Error Response
```json
{
  "detail": "Invalid token."
}
```

## Integration in Civil Rights Tool

### Current Implementation
Our CourtListenerAPI service (`src/services/CourtListenerAPI.js`) provides:

1. **Search Methods**:
   - `searchCases()` - General case search
   - `searchCivilRightsCases()` - Civil rights specific search
   - `searchByLegalArea()` - Search by legal category

2. **Retrieval Methods**:
   - `getCaseDetails()` - Get specific case
   - `getLandmarkCivilRightsCases()` - Get landmark cases
   - `getRecentFederalCircuitDecisions()` - Get recent decisions

3. **Helper Methods**:
   - `extractLegalArea()` - Categorize cases
   - `generateImpactStatement()` - Generate impact text
   - `extractTags()` - Extract relevant tags

### Usage Example
```javascript
import CourtListenerAPI from './services/CourtListenerAPI.js';

// Search for civil rights cases
const results = await CourtListenerAPI.searchCivilRightsCases({
  court: 'scotus',
  date_filed_min: '2020-01-01',
  page_size: 20
});

// Get case details
const caseDetails = await CourtListenerAPI.getCaseDetails(12345);

// Search by legal area
const votingRightsCases = await CourtListenerAPI.searchByLegalArea('Voting Rights', {
  date_filed_min: '2020-01-01'
});
```

## Best Practices

1. **Always Use Authentication**: Include token in all requests
2. **Respect Rate Limits**: Monitor usage, implement backoff
3. **Use Field Selection**: Optimize bandwidth and performance
4. **Handle Errors Gracefully**: Implement proper error handling
5. **Cache When Possible**: Store frequently accessed data
6. **Use Specific Queries**: More precise queries are faster
7. **Follow Pagination Links**: Use cursor-based pagination for large sets
8. **Monitor Usage**: Check profile for API usage stats

## Resources

- **API Documentation**: https://www.courtlistener.com/api/rest/v4/
- **CourtListener**: https://www.courtlistener.com/
- **Free Law Project**: https://free.law/
- **GitHub**: https://github.com/freelawproject/courtlistener

## Support

For API support or questions:
- **Contact Form**: https://www.courtlistener.com/contact/
- **Forum**: https://free.law/
- **Email**: info@free.law

## Data Model

The CourtListener data model follows this hierarchy:

```
Court
  └── Docket (Case)
      └── Cluster (Opinion Group)
          └── Opinion (Individual Opinion)
              └── Citations
```

### Relationships
- A **Court** has many **Dockets**
- A **Docket** has many **Clusters**
- A **Cluster** has many **Opinions** (lead, concurrence, dissent)
- An **Opinion** can cite many other **Opinions**

## Legal Categories Supported

Our integration categorizes cases into:
- Fourth Amendment (Search & Seizure)
- First Amendment (Free Speech, Religion)
- Voting Rights
- Discrimination (Racial, Gender, etc.)
- Police Misconduct
- Reproductive Rights
- LGBTQ+ Rights
- Immigration
- Disability Rights
- Housing Rights

## Conclusion

This API integration provides comprehensive access to federal court decisions, enabling users to research civil rights cases, track legal trends, and analyze judicial decisions. The CourtListener API is a powerful tool for legal research and analysis.