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
  employmentType: faker.random.arrayElement(['Driver', 'Valet', 'Event Personel']),
  employmentStatus: faker.random.arrayElement(['Full Time', 'Part Time', 'CDLT']),
  // department: faker.random.arrayElement(["58c8df3ec2dbe3001d9f90e4","58c8df3ec2dbe3001d9f90e5","58ca40767757620026b3c2f8","58e46e0c727e960047c2251d"]),
  bankName: faker.random.arrayElement(['POSB', 'DBS', 'UOB', 'OCBC', 'HSBC', 'MAYBANK']),
  bankNameOther: 'nameother',
  bankAccountName: name,
  bankAccountNumber: faker.random.number({min:50000, max:59000}).toString(),
  drivingLicenseClasses: '2',
  drivingLicenseNumber: faker.random.number({min:50000, max:90000}).toString(),
  drivingHistory: faker.lorem.sentence(),
  driverRating: 5,
  ratingComment: faker.lorem.words(20),
  profilePicture: faker.random.arrayElement(['http://119.81.52.152:8181/avatar1.jpg', 'http://119.81.52.152:8181/avatar2.jpg']),
  driverLicensePhotos: {
    frontSide: 'http://119.81.52.152:8181/kitas1.jpg',
    backSide: 'http://119.81.52.152:8181/kitas2.jpg',
  },
  // language: faker.random.arrayElement(['English']),
  language: ['English'],
  email: name + "@cprac.com",
  }
}

export {fakeManpower}
