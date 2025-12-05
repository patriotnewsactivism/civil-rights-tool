// Agency Database for FOIA Requests
// Contains location-specific information for state and local agencies

const agencyDatabase = {
  // State-level agencies by state
  stateAgencies: {
    // Major City Police Departments
    cityPoliceDepartments: [
      { name: 'New York City Police Department', type: 'Police Department', email: 'foia@nypd.org', address: '1 Police Plaza, New York, NY 10038', phone: '(646) 610-5000', city: 'New York City', state: 'New York' },
      { name: 'Los Angeles Police Department', type: 'Police Department', email: 'publicaffairs@lapd.online', address: '100 W. 1st Street, Los Angeles, CA 90012', phone: '(213) 485-4000', city: 'Los Angeles', state: 'California' },
      { name: 'Chicago Police Department', type: 'Police Department', email: 'cpdfoia@chicagopolice.org', address: '3510 S. Michigan Ave, Chicago, IL 60653', phone: '(312) 745-3693', city: 'Chicago', state: 'Illinois' },
      { name: 'Houston Police Department', type: 'Police Department', email: 'hpdpio@houstontx.gov', address: '1200 Travis Street, Houston, TX 77002', phone: '(713) 884-1000', city: 'Houston', state: 'Texas' },
      { name: 'Phoenix Police Department', type: 'Police Department', email: 'ppdfoia@phoenix.gov', address: '200 W. Washington St., Phoenix, AZ 85003', phone: '(602) 262-6000', city: 'Phoenix', state: 'Arizona' },
      { name: 'Philadelphia Police Department', type: 'Police Department', email: 'ppdfoia@phillypolice.com', address: '8th & Race Streets, Philadelphia, PA 19107', phone: '(215) 686-1000', city: 'Philadelphia', state: 'Pennsylvania' },
      { name: 'San Antonio Police Department', type: 'Police Department', email: 'sapdfoia@sanantonio.gov', address: '100 W. Nueva St., San Antonio, TX 78205', phone: '(210) 207-7273', city: 'San Antonio', state: 'Texas' },
      { name: 'San Diego Police Department', type: 'Police Department', email: 'foia@sdpolice.gov', address: '210 W. Broadway, San Diego, CA 92101', phone: '(619) 531-2000', city: 'San Diego', state: 'California' },
      { name: 'Dallas Police Department', type: 'Police Department', email: 'dallaspolice@dallascityhall.com', address: '1400 S. Lamar St., Dallas, TX 75215', phone: '(214) 670-4000', city: 'Dallas', state: 'Texas' },
      { name: 'San Jose Police Department', type: 'Police Department', email: 'foia@sanjoseca.gov', address: '201 S. 4th St., San Jose, CA 95112', phone: '(408) 535-4000', city: 'San Jose', state: 'California' }
    ],
    
    // Major County Sheriff's Offices
    countySheriffOffices: [
      { name: 'Los Angeles County Sheriff\'s Department', type: 'Sheriff\'s Office', email: 'foia@lasd.org', address: '435 N. Main St., Los Angeles, CA 90012', phone: '(213) 893-5000', county: 'Los Angeles County', state: 'California' },
      { name: 'Cook County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@cookcountysheriff.org', address: '50 W. Washington St., Chicago, IL 60602', phone: '(312) 602-8000', county: 'Cook County', state: 'Illinois' },
      { name: 'Harris County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@hcso.org', address: '1200 Travis St., Houston, TX 77002', phone: '(713) 221-6000', county: 'Harris County', state: 'Texas' },
      { name: 'Maricopa County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@mcso.org', address: '101 W. Jefferson St., Phoenix, AZ 85003', phone: '(602) 876-1000', county: 'Maricopa County', state: 'Arizona' },
      { name: 'Orange County Sheriff\'s Department', type: 'Sheriff\'s Office', email: 'foia@ocsd.org', address: '700 Civic Center Drive West, Santa Ana, CA 92701', phone: '(657) 622-7000', county: 'Orange County', state: 'California' },
      { name: 'San Diego County Sheriff\'s Department', type: 'Sheriff\'s Office', email: 'foia@sdsheriff.org', address: '3251 Front St., San Diego, CA 92101', phone: '(858) 974-2000', county: 'San Diego County', state: 'California' },
      { name: 'Clark County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@clarkcountynv.gov', address: '400 E. Stewart Ave., Las Vegas, NV 89101', phone: '(702) 385-1200', county: 'Clark County', state: 'Nevada' },
      { name: 'Dallas County Sheriff\'s Department', type: 'Sheriff\'s Office', email: 'foia@dallassheriff.org', address: '100 S. River St., Dallas, TX 75207', phone: '(214) 912-5000', county: 'Dallas County', state: 'Texas' },
      { name: 'Wayne County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@waynecountysheriff.org', address: '600 Randolph St., Detroit, MI 48226', phone: '(313) 224-5000', county: 'Wayne County', state: 'Michigan' },
      { name: 'King County Sheriff\'s Office', type: 'Sheriff\'s Office', email: 'foia@kingsheriff.org', address: '919 SW James St., Seattle, WA 98104', phone: '(206) 296-3000', county: 'King County', state: 'Washington' }
    ],
    
    // State-level agencies by state
    'Alabama': [
      { name: 'Alabama Department of Corrections', type: 'Corrections', email: 'public.information@doc.alabama.gov', address: '301 S. Ripley Street, Montgomery, AL 36104', phone: '(334) 242-5000' },
      { name: 'Alabama Department of Public Health', type: 'Health', email: 'foia@adph.org', address: '420 N. Ripley Street, Montgomery, AL 36130', phone: '(334) 206-5000' },
      { name: 'Alabama Department of Education', type: 'Education', email: 'foia@alsde.edu', address: '50 N. Ripley Street, Montgomery, AL 36130', phone: '(334) 242-8000' }
    ],
    'Alaska': [
      { name: 'Alaska Department of Corrections', type: 'Corrections', email: 'foia@doc.alaska.gov', address: '4000 Elmore Road, Anchorage, AK 99507', phone: '(907) 569-5001' },
      { name: 'Alaska Department of Health and Social Services', type: 'Health', email: 'public.records@alaska.gov', address: '3100 C Street, Anchorage, AK 99503', phone: '(907) 269-8000' },
      { name: 'Alaska Department of Education and Early Development', type: 'Education', email: 'foia@alaska.gov', address: 'Juneau, AK 99801', phone: '(907) 465-2800' }
    ],
    'Arizona': [
      { name: 'Arizona Department of Corrections', type: 'Corrections', email: 'foia@azdoc.gov', address: '821 E. Washington Street, Phoenix, AZ 85034', phone: '(602) 255-8800' },
      { name: 'Arizona Department of Health Services', type: 'Health', email: 'foia@azdhs.gov', address: '1110 W. Fillmore Street, Phoenix, AZ 85007', phone: '(602) 542-1000' },
      { name: 'Arizona Department of Education', type: 'Education', email: 'foia@azed.gov', address: '1535 W. Jefferson Street, Phoenix, AZ 85007', phone: '(602) 542-8000' }
    ],
    'Arkansas': [
      { name: 'Arkansas Department of Correction', type: 'Corrections', email: 'foia@adc.arkansas.gov', address: '101 S. Capitol Ave., Little Rock, AR 72201', phone: '(501) 682-8000' },
      { name: 'Arkansas Department of Health', type: 'Health', email: 'foia@arkansas.gov', address: '425 E. Capitol Ave., Little Rock, AR 72201', phone: '(501) 682-6300' },
      { name: 'Arkansas Department of Education', type: 'Education', email: 'foia@arkansas.gov', address: '425 E. Capitol Ave., Little Rock, AR 72201', phone: '(501) 682-4475' }
    ],
    'California': [
      { name: 'California Department of Corrections and Rehabilitation', type: 'Corrections', email: 'foia@cdc.ca.gov', address: '1515 Clay Street, Oakland, CA 94612', phone: '(510) 286-3000' },
      { name: 'California Department of Public Health', type: 'Health', email: 'foia@cdph.ca.gov', address: '999 N Street, Sacramento, CA 95814', phone: '(916) 327-5000' },
      { name: 'California Department of Education', type: 'Education', email: 'foia@cde.ca.gov', address: '1430 N Street, Sacramento, CA 95814', phone: '(916) 319-0800' }
    ],
    'Colorado': [
      { name: 'Colorado Department of Corrections', type: 'Corrections', email: 'foia@cdoc.state.co.us', address: '13120 East Albrook Drive, Aurora, CO 80012', phone: '(303) 210-2000' },
      { name: 'Colorado Department of Public Health and Environment', type: 'Health', email: 'foia@cdphe.state.co.us', address: '4300 Cherry Creek Drive South, Denver, CO 80246', phone: '(303) 692-2000' },
      { name: 'Colorado Department of Education', type: 'Education', email: 'foia@cde.state.co.us', address: '201 E. Colfax Ave., Denver, CO 80203', phone: '(303) 866-6600' }
    ],
    'Connecticut': [
      { name: 'Connecticut Department of Correction', type: 'Corrections', email: 'foia@doc.state.ct.us', address: '350 Church Street, Hartford, CT 06103', phone: '(860) 565-5000' },
      { name: 'Connecticut Department of Public Health', type: 'Health', email: 'foia@ct.gov', address: '410 Capitol Ave., Hartford, CT 06134', phone: '(860) 509-7000' },
      { name: 'Connecticut Department of Education', type: 'Education', email: 'foia@ct.gov', address: '25 Industrial Park Road, Middletown, CT 06457', phone: '(860) 615-5000' }
    ],
    'Delaware': [
      { name: 'Delaware Department of Correction', type: 'Corrections', email: 'foia@doc.delaware.gov', address: '1000 North DuPont Highway, New Castle, DE 19720', phone: '(302) 323-5000' },
      { name: 'Delaware Department of Health and Social Services', type: 'Health', email: 'foia@state.de.us', address: '4225 N. DuPont Highway, New Castle, DE 19720', phone: '(302) 255-9500' },
      { name: 'Delaware Department of Education', type: 'Education', email: 'foia@education.delaware.gov', address: '400 Federal Street, Dover, DE 19901', phone: '(302) 739-4500' }
    ],
    'Florida': [
      { name: 'Florida Department of Corrections', type: 'Corrections', email: 'foia@doc.state.fl.us', address: '501 S. Calhoun Street, Tallahassee, FL 32399', phone: '(850) 488-4000' },
      { name: 'Florida Department of Health', type: 'Health', email: 'foia@flhealth.gov', address: '4052 Bald Cypress Way, Tallahassee, FL 32399', phone: '(850) 245-4100' },
      { name: 'Florida Department of Education', type: 'Education', email: 'foia@fldoe.org', address: '325 West Gaines Street, Tallahassee, FL 32399', phone: '(850) 245-0400' }
    ],
    'Georgia': [
      { name: 'Georgia Department of Corrections', type: 'Corrections', email: 'foia@gdc.ga.gov', address: '270 Washington Street SW, Atlanta, GA 30334', phone: '(404) 657-5000' },
      { name: 'Georgia Department of Public Health', type: 'Health', email: 'foia@dph.ga.gov', address: '2600 Skyland Drive, Atlanta, GA 30341', phone: '(404) 657-2500' },
      { name: 'Georgia Department of Education', type: 'Education', email: 'foia@doe.ga.gov', address: '205 Jesse Hill Jr. Drive SE, Atlanta, GA 30334', phone: '(404) 656-2500' }
    ],
    'Hawaii': [
      { name: 'Hawaii Department of Public Safety', type: 'Corrections', email: 'foia@dps.hawaii.gov', address: '415 S. Beretania Street, Honolulu, HI 96813', phone: '(808) 586-2500' },
      { name: 'Hawaii Department of Health', type: 'Health', email: 'foia@hawaii.gov', address: '1250 Punchbowl Street, Honolulu, HI 96813', phone: '(808) 586-4000' },
      { name: 'Hawaii Department of Education', type: 'Education', email: 'foia@notes.k12.hi.us', address: '1390 Miller Street, Honolulu, HI 96813', phone: '(808) 733-4000' }
    ],
    'Idaho': [
      { name: 'Idaho Department of Correction', type: 'Corrections', email: 'foia@idoc.idaho.gov', address: '700 W. State Street, Boise, ID 83720', phone: '(208) 334-5000' },
      { name: 'Idaho Department of Health and Welfare', type: 'Health', email: 'foia@healthandwelfare.idaho.gov', address: '1410 Broadway, Boise, ID 83712', phone: '(208) 334-4600' },
      { name: 'Idaho Department of Education', type: 'Education', email: 'foia@education.idaho.gov', address: '600 W. Broadway, Boise, ID 83720', phone: '(208) 332-6800' }
    ],
    'Illinois': [
      { name: 'Illinois Department of Corrections', type: 'Corrections', email: 'foia@illinois.gov', address: '1094 E. Eads Street, Springfield, IL 62702', phone: '(217) 557-4000' },
      { name: 'Illinois Department of Public Health', type: 'Health', email: 'foia@health.illinois.gov', address: '535 W. Jefferson Street, Springfield, IL 62761', phone: '(217) 782-4000' },
      { name: 'Illinois State Board of Education', type: 'Education', email: 'foia@isbe.net', address: '100 N. First Street, Springfield, IL 62777', phone: '(217) 558-5000' }
    ],
    'Indiana': [
      { name: 'Indiana Department of Correction', type: 'Corrections', email: 'foia@idoc.in.gov', address: '302 W. Washington Street, Indianapolis, IN 46204', phone: '(317) 232-5000' },
      { name: 'Indiana State Department of Health', type: 'Health', email: 'foia@state.in.us', address: '2 North Meridian Street, Indianapolis, IN 46204', phone: '(317) 233-7125' },
      { name: 'Indiana Department of Education', type: 'Education', email: 'foia@doe.in.gov', address: '11555 N. Meridian Street, Indianapolis, IN 46290', phone: '(317) 232-6000' }
    ],
    'Iowa': [
      { name: 'Iowa Department of Corrections', type: 'Corrections', email: 'foia@doc.iowa.gov', address: '1501 E. Walnut Street, Des Moines, IA 50319', phone: '(515) 725-5000' },
      { name: 'Iowa Department of Public Health', type: 'Health', email: 'foia@health.iowa.gov', address: '321 E. 12th Street, Des Moines, IA 50319', phone: '(515) 281-7680' },
      { name: 'Iowa Department of Education', type: 'Education', email: 'foia@education.iowa.gov', address: '400 E. 14th Street, Des Moines, IA 50319', phone: '(515) 286-3000' }
    ],
    'Kansas': [
      { name: 'Kansas Department of Corrections', type: 'Corrections', email: 'foia@doc.ks.gov', address: '1300 SW Jackson Street, Topeka, KS 66612', phone: '(785) 296-5000' },
      { name: 'Kansas Department of Health and Environment', type: 'Health', email: 'foia@kdheks.gov', address: '1000 SW Jackson Street, Topeka, KS 66612', phone: '(785) 296-1500' },
      { name: 'Kansas State Department of Education', type: 'Education', email: 'foia@ksde.org', address: '900 SW Jackson Street, Topeka, KS 66612', phone: '(785) 296-3200' }
    ],
    'Kentucky': [
      { name: 'Kentucky Department of Corrections', type: 'Corrections', email: 'foia@ky.gov', address: '100 Fair Oaks Lane, Frankfort, KY 40621', phone: '(502) 564-5000' },
      { name: 'Kentucky Cabinet for Health and Family Services', type: 'Health', email: 'foia@chfs.ky.gov', address: '275 East Main Street, Frankfort, KY 40621', phone: '(502) 564-7000' },
      { name: 'Kentucky Department of Education', type: 'Education', email: 'foia@education.ky.gov', address: '300 Sower Boulevard, Frankfort, KY 40601', phone: '(502) 564-4730' }
    ],
    'Louisiana': [
      { name: 'Louisiana Department of Public Safety and Corrections', type: 'Corrections', email: 'foia@dps.louisiana.gov', address: '10150 Interrogation Drive, Baton Rouge, LA 70810', phone: '(225) 925-5000' },
      { name: 'Louisiana Department of Health', type: 'Health', email: 'foia@ldh.la.gov', address: '628 N. 4th Street, Baton Rouge, LA 70802', phone: '(225) 342-0000' },
      { name: 'Louisiana Department of Education', type: 'Education', email: 'foia@la.gov', address: '1201 N. 3rd Street, Baton Rouge, LA 70806', phone: '(225) 342-0900' }
    ],
    'Maine': [
      { name: 'Maine Department of Corrections', type: 'Corrections', email: 'foia@maine.gov', address: '100 State House Station, Augusta, ME 04333', phone: '(207) 624-5000' },
      { name: 'Maine Department of Health and Human Services', type: 'Health', email: 'foia@maine.gov', address: '111 Water Street, Augusta, ME 04333', phone: '(207) 287-5000' },
      { name: 'Maine Department of Education', type: 'Education', email: 'foia@maine.gov', address: '23 State House Station, Augusta, ME 04333', phone: '(207) 624-6600' }
    ],
    'Maryland': [
      { name: 'Maryland Department of Public Safety and Correctional Services', type: 'Corrections', email: 'foia@dnr.state.md.us', address: '1201 Reisterstown Road, Baltimore, MD 21234', phone: '(410) 585-5000' },
      { name: 'Maryland Department of Health', type: 'Health', email: 'foia@health.maryland.gov', address: '201 W. Preston Street, Baltimore, MD 21201', phone: '(410) 767-5000' },
      { name: 'Maryland State Department of Education', type: 'Education', email: 'foia@msde.maryland.gov', address: '200 W. Washington Street, Baltimore, MD 21201', phone: '(410) 333-6000' }
    ],
    'Massachusetts': [
      { name: 'Massachusetts Department of Correction', type: 'Corrections', email: 'foia@doc.mass.gov', address: 'One Ashburton Place, Boston, MA 02108', phone: '(617) 727-5000' },
      { name: 'Massachusetts Department of Public Health', type: 'Health', email: 'foia@mass.gov', address: '250 Washington Street, Boston, MA 02108', phone: '(617) 624-5000' },
      { name: 'Massachusetts Department of Elementary and Secondary Education', type: 'Education', email: 'foia@doe.mass.edu', address: '75 Pleasant Street, Malden, MA 02148', phone: '(781) 338-3000' }
    ],
    'Michigan': [
      { name: 'Michigan Department of Corrections', type: 'Corrections', email: 'foia@michigan.gov', address: '1600 E. Lansing Street, Lansing, MI 48912', phone: '(517) 373-5000' },
      { name: 'Michigan Department of Health and Human Services', type: 'Health', email: 'foia@mdhhs.state.mi.us', address: '611 W. Ottawa Street, Lansing, MI 48913', phone: '(517) 373-3000' },
      { name: 'Michigan Department of Education', type: 'Education', email: 'foia@michigan.gov', address: '608 W. Allis Street, Lansing, MI 48913', phone: '(517) 373-1000' }
    ],
    'Minnesota': [
      { name: 'Minnesota Department of Corrections', type: 'Corrections', email: 'foia@state.mn.us', address: '1416 Miller Trunk Highway, Brainerd, MN 56401', phone: '(218) 825-5000' },
      { name: 'Minnesota Department of Health', type: 'Health', email: 'foia@health.state.mn.us', address: '85 East 7th Place, St. Paul, MN 55155', phone: '(651) 201-5000' },
      { name: 'Minnesota Department of Education', type: 'Education', email: 'foia@education.state.mn.us', address: '1500 Highway 36 West, Roseville, MN 55113', phone: '(651) 582-8200' }
    ],
    'Mississippi': [
      { name: 'Mississippi Department of Corrections', type: 'Corrections', email: 'foia@mdoc.state.ms.us', address: '510 East Capitol Street, Jackson, MS 39201', phone: '(601) 359-5000' },
      { name: 'Mississippi State Department of Health', type: 'Health', email: 'foia@msdh.ms.gov', address: '570 East Woodrow Wilson Drive, Jackson, MS 39216', phone: '(601) 576-7000' },
      { name: 'Mississippi Department of Education', type: 'Education', email: 'foia@mde.k12.ms.us', address: '359 North Farish Street, Jackson, MS 39202', phone: '(601) 359-3000' }
    ],
    'Missouri': [
      { name: 'Missouri Department of Corrections', type: 'Corrections', email: 'foia@doc.mo.gov', address: 'P.O. Box 100, Jefferson City, MO 65102', phone: '(573) 751-5000' },
      { name: 'Missouri Department of Health and Senior Services', type: 'Health', email: 'foia@health.mo.gov', address: '901 N. Main Street, Jefferson City, MO 65101', phone: '(573) 751-6400' },
      { name: 'Missouri Department of Elementary and Secondary Education', type: 'Education', email: 'foia@dese.mo.gov', address: '205 Jefferson Street, Jefferson City, MO 65101', phone: '(573) 751-4212' }
    ],
    'Montana': [
      { name: 'Montana Department of Corrections', type: 'Corrections', email: 'foia@mt.gov', address: '3000 10th Avenue South, Billings, MT 59101', phone: '(406) 255-5000' },
      { name: 'Montana Department of Public Health and Human Services', type: 'Health', email: 'foia@mt.gov', address: '111 N. Sanders Street, Helena, MT 59620-0001', phone: '(406) 444-5000' },
      { name: 'Montana Office of Public Instruction', type: 'Education', email: 'foia@opi.mt.gov', address: '111 N. Sanders Street, Helena, MT 59620-0001', phone: '(406) 444-3000' }
    ],
    'Nebraska': [
      { name: 'Nebraska Department of Correctional Services', type: 'Corrections', email: 'foia@corrections.nebraska.gov', address: '2930 Salt Creek Highway, Lincoln, NE 68508', phone: '(402) 471-5000' },
      { name: 'Nebraska Department of Health and Human Services', type: 'Health', email: 'foia@dhhs.ne.gov', address: '301 Centennial Mall South, Lincoln, NE 68508', phone: '(402) 471-2000' },
      { name: 'Nebraska Department of Education', type: 'Education', email: 'foia@nde.nebraska.gov', address: '301 Centennial Mall South, Lincoln, NE 68508', phone: '(402) 471-2200' }
    ],
    'Nevada': [
      { name: 'Nevada Department of Corrections', type: 'Corrections', email: 'foia@doc.nv.gov', address: '4125 Enterprise Drive, Carson City, NV 89701', phone: '(775) 687-5000' },
      { name: 'Nevada Department of Health and Human Services', type: 'Health', email: 'foia@dhhs.nv.gov', address: '4455 East Flamingo Road, Las Vegas, NV 89119', phone: '(702) 486-5000' },
      { name: 'Nevada Department of Education', type: 'Education', email: 'foia@doe.nv.gov', address: '700 E. Fifth Street, Carson City, NV 89701', phone: '(775) 687-9100' }
    ],
    'New Hampshire': [
      { name: 'New Hampshire Department of Corrections', type: 'Corrections', email: 'foia@doc.nh.gov', address: '33 Hazen Drive, Concord, NH 03301', phone: '(603) 271-5000' },
      { name: 'New Hampshire Department of Health and Human Services', type: 'Health', email: 'foia@dhhs.nh.gov', address: '29 Hazen Drive, Concord, NH 03301', phone: '(603) 271-4600' },
      { name: 'New Hampshire Department of Education', type: 'Education', email: 'foia@education.nh.gov', address: '101 Pleasant Street, Concord, NH 03301', phone: '(603) 271-3500' }
    ],
    'New Jersey': [
      { name: 'New Jersey Department of Corrections', type: 'Corrections', email: 'foia@state.nj.us', address: '2955 Raritan Road, Piscataway, NJ 08854', phone: '(732) 828-5000' },
      { name: 'New Jersey Department of Health', type: 'Health', email: 'foia@health.state.nj.us', address: 'P.O. Box 360, Trenton, NJ 08625', phone: '(609) 588-5000' },
      { name: 'New Jersey Department of Education', type: 'Education', email: 'foia@doe.state.nj.us', address: '1000 River View Plaza, Trenton, NJ 08611', phone: '(609) 292-4000' }
    ],
    'New Mexico': [
      { name: 'New Mexico Corrections Department', type: 'Corrections', email: 'foia@state.nm.us', address: '1901 Cerrillos Road, Santa Fe, NM 87505', phone: '(505) 476-5000' },
      { name: 'New Mexico Department of Health', type: 'Health', email: 'foia@nmhealth.org', address: '1190 St. Francis Drive, Santa Fe, NM 87505', phone: '(505) 827-0007' },
      { name: 'New Mexico Public Education Department', type: 'Education', email: 'foia@ped.state.nm.us', address: '300 Don Gaspar, Santa Fe, NM 87501', phone: '(505) 827-5800' }
    ],
    'New York': [
      { name: 'New York State Department of Corrections and Community Supervision', type: 'Corrections', email: 'foia@doccs.ny.gov', address: '1220 Washington Avenue, Building 2, Albany, NY 12226', phone: '(518) 457-5000' },
      { name: 'New York State Department of Health', type: 'Health', email: 'foia@health.ny.gov', address: '895 Broadway, Albany, NY 12207', phone: '(518) 474-5000' },
      { name: 'New York State Education Department', type: 'Education', email: 'foia@nysed.gov', address: '89 Washington Avenue, Albany, NY 12234', phone: '(518) 474-3901' }
    ],
    'North Carolina': [
      { name: 'North Carolina Department of Public Safety', type: 'Corrections', email: 'foia@nc.gov', address: '1235 Mail Service Center, Raleigh, NC 27699', phone: '(919) 733-5000' },
      { name: 'North Carolina Department of Health and Human Services', type: 'Health', email: 'foia@ncdhhs.gov', address: '2709 Mail Service Center, Raleigh, NC 27699', phone: '(919) 855-3000' },
      { name: 'North Carolina Department of Public Instruction', type: 'Education', email: 'foia@dpi.nc.gov', address: '301 N. Wilmington Street, Raleigh, NC 27601', phone: '(919) 733-6000' }
    ],
    'North Dakota': [
      { name: 'North Dakota Department of Corrections and Rehabilitation', type: 'Corrections', email: 'foia@nd.gov', address: '1301 N. Highway 83, Bismarck, ND 58501', phone: '(701) 328-5000' },
      { name: 'North Dakota Department of Health', type: 'Health', email: 'foia@nd.gov', address: '608 East Boulevard Avenue, Bismarck, ND 58505', phone: '(701) 328-2370' },
      { name: 'North Dakota Department of Public Instruction', type: 'Education', email: 'foia@nd.gov', address: '600 East Boulevard Avenue, Bismarck, ND 58505', phone: '(701) 328-4100' }
    ],
    'Ohio': [
      { name: 'Ohio Department of Rehabilitation and Correction', type: 'Corrections', email: 'foia@cor.ohio.gov', address: '770 West Spring Street, Columbus, OH 43222', phone: '(614) 466-5000' },
      { name: 'Ohio Department of Health', type: 'Health', email: 'foia@odh.ohio.gov', address: '246 N. High Street, Columbus, OH 43201', phone: '(614) 466-2760' },
      { name: 'Ohio Department of Education', type: 'Education', email: 'foia@education.ohio.gov', address: '25 South Front Street, Columbus, OH 43215', phone: '(614) 466-2650' }
    ],
    'Oklahoma': [
      { name: 'Oklahoma Department of Corrections', type: 'Corrections', email: 'foia@doc.ok.gov', address: '2800 N. Lincoln Blvd., Oklahoma City, OK 73105', phone: '(405) 425-5000' },
      { name: 'Oklahoma State Department of Health', type: 'Health', email: 'foia@health.ok.gov', address: '1000 N.E. 10th Street, Oklahoma City, OK 73117', phone: '(405) 271-4000' },
      { name: 'Oklahoma State Department of Education', type: 'Education', email: 'foia@osde.ok.gov', address: '2500 N. Lincoln Blvd., Oklahoma City, OK 73105', phone: '(405) 521-3300' }
    ],
    'Oregon': [
      { name: 'Oregon Department of Corrections', type: 'Corrections', email: 'foia@doc.state.or.us', address: '725 Summer Street NE, Salem, OR 97310', phone: '(503) 945-5000' },
      { name: 'Oregon Health Authority', type: 'Health', email: 'foia@oregon.gov', address: '742 S.W. Gaines Street, Portland, OR 97201', phone: '(503) 731-4000' },
      { name: 'Oregon Department of Education', type: 'Education', email: 'foia@oregon.gov', address: '255 Capitol Street NE, Salem, OR 97310', phone: '(503) 934-4000' }
    ],
    'Pennsylvania': [
      { name: 'Pennsylvania Department of Corrections', type: 'Corrections', email: 'foia@pa.gov', address: '700 North Pike Street, Dallas, PA 18612', phone: '(570) 753-5000' },
      { name: 'Pennsylvania Department of Health', type: 'Health', email: 'foia@pa.gov', address: '2600 North Third Street, Harrisburg, PA 17110', phone: '(717) 787-5000' },
      { name: 'Pennsylvania Department of Education', type: 'Education', email: 'foia@pa.gov', address: '333 Market Street, Harrisburg, PA 17126', phone: '(717) 787-1000' }
    ],
    'Rhode Island': [
      { name: 'Rhode Island Department of Corrections', type: 'Corrections', email: 'foia@doc.ri.gov', address: '40 Howard Avenue, Cranston, RI 02920', phone: '(401) 942-5000' },
      { name: 'Rhode Island Department of Health', type: 'Health', email: 'foia@health.ri.gov', address: '3 Capitol Hill, Providence, RI 02908', phone: '(401) 222-8021' },
      { name: 'Rhode Island Department of Education', type: 'Education', email: 'foia@ride.ri.gov', address: '255 Westminster Street, Providence, RI 02903', phone: '(401) 222-4600' }
    ],
    'South Carolina': [
      { name: 'South Carolina Department of Corrections', type: 'Corrections', email: 'foia@sc.gov', address: '1700 Remount Road, Columbia, SC 29201', phone: '(803) 734-5000' },
      { name: 'South Carolina Department of Health and Environmental Control', type: 'Health', email: 'foia@scdhec.gov', address: '1000 Assembly Street, Columbia, SC 29201', phone: '(803) 898-4000' },
      { name: 'South Carolina Department of Education', type: 'Education', email: 'foia@ed.sc.gov', address: '1429 Senate Street, Columbia, SC 29201', phone: '(803) 734-8000' }
    ],
    'South Dakota': [
      { name: 'South Dakota Department of Corrections', type: 'Corrections', email: 'foia@state.sd.us', address: '500 E. Capitol Avenue, Pierre, SD 57501', phone: '(605) 773-5000' },
      { name: 'South Dakota Department of Health', type: 'Health', email: 'foia@state.sd.us', address: '700 Governors Drive, Pierre, SD 57501', phone: '(605) 773-3200' },
      { name: 'South Dakota Department of Education', type: 'Education', email: 'foia@state.sd.us', address: '800 Governors Drive, Pierre, SD 57501', phone: '(605) 773-3100' }
    ],
    'Tennessee': [
      { name: 'Tennessee Department of Correction', type: 'Corrections', email: 'foia@tn.gov', address: '322 Union Street, Nashville, TN 37243', phone: '(615) 741-5000' },
      { name: 'Tennessee Department of Health', type: 'Health', email: 'foia@tn.gov', address: '425 5th Avenue North, Nashville, TN 37243', phone: '(615) 532-4000' },
      { name: 'Tennessee Department of Education', type: 'Education', email: 'foia@tn.gov', address: '710 James Robertson Parkway, Nashville, TN 37243', phone: '(615) 532-4500' }
    ],
    'Texas': [
      { name: 'Texas Department of Criminal Justice', type: 'Corrections', email: 'foia@tdcj.state.tx.us', address: '1301 N. I-35 Frontage Road, Huntsville, TX 77340', phone: '(936) 295-5000' },
      { name: 'Texas Department of State Health Services', type: 'Health', email: 'foia@dshs.texas.gov', address: '1100 W. 49th Street, Austin, TX 78756', phone: '(512) 834-6600' },
      { name: 'Texas Education Agency', type: 'Education', email: 'foia@tea.texas.gov', address: '1701 N. Congress Avenue, Austin, TX 78701', phone: '(512) 463-9730' }
    ],
    'Utah': [
      { name: 'Utah Department of Corrections', type: 'Corrections', email: 'foia@corrections.utah.gov', address: '4400 S. 3800 W., Salt Lake City, UT 84107', phone: '(801) 585-5000' },
      { name: 'Utah Department of Health and Human Services', type: 'Health', email: 'foia@utah.gov', address: '288 North 1460 West, Salt Lake City, UT 84116', phone: '(801) 585-6300' },
      { name: 'Utah State Board of Education', type: 'Education', email: 'foia@schools.utah.gov', address: '250 East 500 South, Salt Lake City, UT 84111', phone: '(801) 538-7500' }
    ],
    'Vermont': [
      { name: 'Vermont Department of Corrections', type: 'Corrections', email: 'foia@vermont.gov', address: '1 National Life Drive, Montpelier, VT 05602', phone: '(802) 828-5000' },
      { name: 'Vermont Department of Health', type: 'Health', email: 'foia@healthvermont.gov', address: '108 Cherry Street, Burlington, VT 05401', phone: '(802) 863-7200' },
      { name: 'Vermont Agency of Education', type: 'Education', email: 'foia@vermont.gov', address: '1 National Life Drive, Montpelier, VT 05620', phone: '(802) 828-3100' }
    ],
    'Virginia': [
      { name: 'Virginia Department of Corrections', type: 'Corrections', email: 'foia@vadoc.virginia.gov', address: '1100 Bank Street, Richmond, VA 23227', phone: '(804) 786-5000' },
      { name: 'Virginia Department of Health', type: 'Health', email: 'foia@vdh.virginia.gov', address: '109 Governor Street, Richmond, VA 23219', phone: '(804) 864-7600' },
      { name: 'Virginia Department of Education', type: 'Education', email: 'foia@doe.virginia.gov', address: '101 N. 14th Street, Richmond, VA 23219', phone: '(804) 225-2100' }
    ],
    'Washington': [
      { name: 'Washington State Department of Corrections', type: 'Corrections', email: 'foia@doc.wa.gov', address: '1111 Washington Street SE, Lacey, WA 98504', phone: '(360) 725-5000' },
      { name: 'Washington State Department of Health', type: 'Health', email: 'foia@doh.wa.gov', address: '2401 4th Avenue, Seattle, WA 98121', phone: '(360) 236-4700' },
      { name: 'Washington State Office of Superintendent of Public Instruction', type: 'Education', email: 'foia@k12.wa.us', address: 'Old Capitol Building, 600 Washington Street SE, Olympia, WA 98504', phone: '(360) 725-6000' }
    ],
    'West Virginia': [
      { name: 'West Virginia Division of Corrections and Rehabilitation', type: 'Corrections', email: 'foia@wv.gov', address: '1315 Kanawha Boulevard East, Charleston, WV 25301', phone: '(304) 558-5000' },
      { name: 'West Virginia Department of Health and Human Resources', type: 'Health', email: 'foia@wv.gov', address: '428 Kanawha Boulevard East, Charleston, WV 25301', phone: '(304) 558-0000' },
      { name: 'West Virginia Department of Education and the Arts', type: 'Education', email: 'foia@wv.gov', address: '1900 Kanawha Boulevard East, Charleston, WV 25305', phone: '(304) 558-2616' }
    ],
    'Wisconsin': [
      { name: 'Wisconsin Department of Corrections', type: 'Corrections', email: 'foia@wisconsin.gov', address: '2135 Rimrock Road, Madison, WI 53713', phone: '(608) 266-5000' },
      { name: 'Wisconsin Department of Health Services', type: 'Health', email: 'foia@wisconsin.gov', address: '201 East Washington Avenue, Madison, WI 53703', phone: '(608) 266-0000' },
      { name: 'Wisconsin Department of Public Instruction', type: 'Education', email: 'foia@dpi.wi.gov', address: '125 S. Webster Street, Madison, WI 53703', phone: '(608) 266-3390' }
    ],
    'Wyoming': [
      { name: 'Wyoming Department of Corrections', type: 'Corrections', email: 'foia@corrections.wyo.gov', address: '300 W. 24th Street, Cheyenne, WY 82002', phone: '(307) 777-5000' },
      { name: 'Wyoming Department of Health', type: 'Health', email: 'foia@health.wyo.gov', address: '2300 Capitol Avenue, Cheyenne, WY 82002', phone: '(307) 777-7000' },
      { name: 'Wyoming Department of Education', type: 'Education', email: 'foia@edu.wyo.gov', address: '2300 Capitol Avenue, Cheyenne, WY 82002', phone: '(307) 777-6200' }
    ]
  },

  // Major city police departments
  cityPoliceDepartments: {
    'New York': [
      { name: 'New York City Police Department', type: 'Law Enforcement', email: 'foia@nypd.org', address: '1 Police Plaza, New York, NY 10038', phone: '(212) 387-5000' }
    ],
    'Los Angeles': [
      { name: 'Los Angeles Police Department', type: 'Law Enforcement', email: 'foia@lapd.online', address: '100 W. 1st Street, Los Angeles, CA 90012', phone: '(213) 485-4000' }
    ],
    'Chicago': [
      { name: 'Chicago Police Department', type: 'Law Enforcement', email: 'foia@chicagopolice.org', address: '3510 S. Michigan Avenue, Chicago, IL 60653', phone: '(312) 746-4000' }
    ],
    'Houston': [
      { name: 'Houston Police Department', type: 'Law Enforcement', email: 'foia@houstontx.gov', address: '1200 Travis Street, Houston, TX 77002', phone: '(713) 884-1000' }
    ],
    'Phoenix': [
      { name: 'Phoenix Police Department', type: 'Law Enforcement', email: 'foia@phoenix.gov', address: '200 W. Washington Street, Phoenix, AZ 85003', phone: '(602) 262-6000' }
    ],
    'Philadelphia': [
      { name: 'Philadelphia Police Department', type: 'Law Enforcement', email: 'foia@phillypolice.com', address: '801 N. 3rd Street, Philadelphia, PA 19123', phone: '(215) 686-1000' }
    ],
    'San Antonio': [
      { name: 'San Antonio Police Department', type: 'Law Enforcement', email: 'foia@sanantonio.gov', address: '100 W. Nueva Street, San Antonio, TX 78205', phone: '(210) 207-7000' }
    ],
    'San Diego': [
      { name: 'San Diego Police Department', type: 'Law Enforcement', email: 'foia@sandiego.gov', address: '200 W. Broadway, San Diego, CA 92101', phone: '(619) 531-2000' }
    ],
    'Dallas': [
      { name: 'Dallas Police Department', type: 'Law Enforcement', email: 'foia@dallaspolice.net', address: '1400 Main Street, Dallas, TX 75202', phone: '(214) 670-5000' }
    ],
    'San Jose': [
      { name: 'San Jose Police Department', type: 'Law Enforcement', email: 'foia@sanjoseca.gov', address: '201 S. Market Street, San Jose, CA 95113', phone: '(408) 535-4000' }
    ],
    'Austin': [
      { name: 'Austin Police Department', type: 'Law Enforcement', email: 'foia@austintexas.gov', address: '715 E. 8th Street, Austin, TX 78705', phone: '(512) 974-5000' }
    ],
    'Jacksonville': [
      { name: 'Jacksonville Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@jaxsheriff.org', address: '500 E. Bay Street, Jacksonville, FL 32202', phone: '(904) 630-5000' }
    ],
    'Fort Worth': [
      { name: 'Fort Worth Police Department', type: 'Law Enforcement', email: 'foia@fortworthtexas.gov', address: '200 E. Weatherford Street, Fort Worth, TX 76196', phone: '(817) 392-5000' }
    ],
    'Columbus': [
      { name: 'Columbus Division of Police', type: 'Law Enforcement', email: 'foia@columbus.gov', address: '555 S. Front Street, Columbus, OH 43215', phone: '(614) 645-5000' }
    ],
    'Charlotte': [
      { name: 'Charlotte-Mecklenburg Police Department', type: 'Law Enforcement', email: 'foia@cmpd.org', address: '601 E. Fourth Street, Charlotte, NC 28202', phone: '(704) 336-8000' }
    ],
    'San Francisco': [
      { name: 'San Francisco Police Department', type: 'Law Enforcement', email: 'foia@sfgov.org', address: '850 Bryant Street, San Francisco, CA 94103', phone: '(415) 553-0123' }
    ],
    'Indianapolis': [
      { name: 'Indianapolis Metropolitan Police Department', type: 'Law Enforcement', email: 'foia@indy.gov', address: '200 E. Market Street, Indianapolis, IN 46202', phone: '(317) 327-5000' }
    ],
    'Seattle': [
      { name: 'Seattle Police Department', type: 'Law Enforcement', email: 'foia@seattle.gov', address: '605 4th Avenue, Seattle, WA 98104', phone: '(206) 625-5000' }
    ],
    'Denver': [
      { name: 'Denver Police Department', type: 'Law Enforcement', email: 'foia@denvergov.org', address: '1331 Exposition Blvd., Denver, CO 80204', phone: '(720) 913-5000' }
    ],
    'Washington': [
      { name: 'Metropolitan Police Department of the District of Columbia', type: 'Law Enforcement', email: 'foia@mpdc.dc.gov', address: '441 4th Street NW, Washington, DC 20001', phone: '(202) 727-5000' }
    ]
  },

  // County sheriff offices
  countySheriffOffices: {
    'Los Angeles County': [
      { name: 'Los Angeles County Sheriff\'s Department', type: 'Law Enforcement', email: 'foia@lasd.org', address: '444 S. Alameda Street, Los Angeles, CA 90013', phone: '(213) 893-5000' }
    ],
    'Cook County': [
      { name: 'Cook County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@cookcountysheriff.org', address: '50 W. Washington Street, Chicago, IL 60602', phone: '(312) 602-8000' }
    ],
    'Harris County': [
      { name: 'Harris County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@hcso.org', address: '1200 Travis Street, Houston, TX 77002', phone: '(713) 221-5000' }
    ],
    'Maricopa County': [
      { name: 'Maricopa County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@mcso.org', address: '101 W. Jackson Street, Phoenix, AZ 85003', phone: '(602) 876-1000' }
    ],
    'Orange County': [
      { name: 'Orange County Sheriff\'s Department', type: 'Law Enforcement', email: 'foia@ocsd.org', address: '700 Civic Center Drive West, Santa Ana, CA 92701', phone: '(657) 622-7000' }
    ],
    'Kings County': [
      { name: 'Kings County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@kingscountysheriff.org', address: '1400 6th Street, Hanford, CA 93230', phone: '(559) 582-4000' }
    ],
    'Clark County': [
      { name: 'Clark County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@clarkcountynv.gov', address: '400 E. 3rd Street, Las Vegas, NV 89155', phone: '(702) 385-5000' }
    ],
    'Wayne County': [
      { name: 'Wayne County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@waynecountysheriff.org', address: '600 Randolph Street, Detroit, MI 48226', phone: '(313) 224-5000' }
    ],
    'Miami-Dade County': [
      { name: 'Miami-Dade Police Department', type: 'Law Enforcement', email: 'foia@mdpd.fl.gov', address: '111 NW 1st Street, Miami, FL 33128', phone: '(305) 416-5000' }
    ],
    'Bexar County': [
      { name: 'Bexar County Sheriff\'s Office', type: 'Law Enforcement', email: 'foia@bexarsheriff.org', address: '101 W. Nueva Street, San Antonio, TX 78205', phone: '(210) 335-5000' }
    ]
  }
};

export default agencyDatabase;