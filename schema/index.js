import faker from 'faker'
const fakeManpower = () => {
  // prevent duplicate
  let name = faker.name.firstName();
  return {
  idNumber: faker.random.number({min:50000, max:60000}).toString(),
  fullName: name,
  birthdate: '1987-12-12',
  nationality: faker.random.arrayElement(['Singaporean', 'Permanent Resident']),
  race: faker.random.arrayElement(['Chinese', 'Indian', 'Malay', 'Caucasian']),
  phoneNumber: faker.phone.phoneNumberFormat(1).toString(),
  employmentType: faker.random.arrayElement(['Driver', 'Valet']), // Event Personnel
  employmentStatus: faker.random.arrayElement(['Full Time', 'Part Time', 'CDLT']),
  department: faker.random.arrayElement(["59db3045ae73bc001cf632f0","59db3041ae73bc001cf632ef"]),
  bankName: faker.random.arrayElement(['POSB', 'DBS', 'UOB', 'OCBC', 'HSBC', 'MAYBANK']),
  bankNameOther: 'nameother',
  bankAccountName: name,
  bankAccountNumber: faker.random.number({min:50000, max:59000}).toString(),
  drivingLicenseClasses: '2',
  drivingLicenseNumber: faker.random.number({min:50000, max:90000}).toString(),
  drivingHistory: faker.lorem.sentence(),
  driverRating: 5,
  ratingComment: faker.lorem.words(20),
  profilePicture: faker.random.arrayElement(['http://13.229.108.111:8181/driver2.jpg', 'http://13.229.108.111:8181/thin-0728_construction_worker_site_helmet_safety.png']),
  driverLicensePhotos: {
    frontSide: 'http://13.229.108.111:8181/42.jpg',
    backSide: 'http://13.229.108.111:8181/42.jpg',
  },
  // language: faker.random.arrayElement(['English']),
  language: ['English'],
  email: name + "@cprac.com",
  }
}

const fakePost = () => {
  return {
    title:faker.lorem.words(5),
    content:faker.lorem.paragraphs(1)
  }
}

export {fakeManpower, fakePost}
