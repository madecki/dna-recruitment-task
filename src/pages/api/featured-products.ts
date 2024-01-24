import type { NextApiRequest, NextApiResponse } from "next";

type ProductImage = {
  imageSrc: string;
  imageAlt?: string;
};

export type ProductProps = {
  id: string;
  title: string;
  brand: string;
  reviewsCount: number;
  rating: number;
  price: number;
  colors: string[];
  sizes: {
    name: string;
    description: string;
  }[];
  currency: string;
  images: ProductImage[];
  slug: string;
  isNew?: boolean;
} & ProductImage;

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ProductProps[] | { message: string }>
) {
  setTimeout(() => {
    res.send(products);
  }, 1500);
}

const products: ProductProps[] = [
  {
    id: "1",
    title: "Black shirt",
    brand: "RMX-900",
    price: 2900,
    rating: 4.5,
    reviewsCount: 18,
    currency: "$",
    isNew: true,
    colors: ["#F9A8D4", "#EF4444", "#F59E0B", "#E5E7EB"],
    sizes: [
      {
        name: "Small",
        description: "120 by 18 inches",
      },
      {
        name: "Medium",
        description: "201 by 89 inches",
      },
      {
        name: "Large",
        description: "400 by 120 inches",
      },
    ],
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/b5e3/b2e3/c44130d10ac7284f2ea8355128d9e0b4?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VERuaSlJ4qLZcYwXez-GD4-WKKrMbTiczCCHJ15lxEqSwloXfrYL6KOR~oZ8h-~9Exo7fTmnKzHhJSM31bxTCqJU~A~nXu0DZ5sLYlg1nG0TDy4pKKPojLqY058W-q1AZZm4TZ~yzlklpYkuYCbgZr4WGh09WMTakx9bInD5nSdQhVfB8ZWegZdBDh01gqLt9fA0AreXnKSjE0XVYVQJYRHWT6chr5ZwG27ShunBJyMaMviF9kwXL9Hl~W7kMkvWZ23UUldLaZybRgM1U5ksANOmqBtsT0Fqdb3w9qY1ngSuLg7hqtdQVVWWTX7aPsRenZv43JAbHkxmWr9ixV6Q7A__",
    imageAlt: "",
    slug: "black-shirt",
    images: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/88b5/a615/4899f7ff5e0fb8c4e283a02c8251b73f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDG8J0IlWvbIYI45jUeyooXtcPiFJ3rP5wh5U72OdGsPCIq-OCtzLzJI4q6gZIxeIvNU6pvWu2yA75MNuEktWipISWIKv05UFVlRwUm40d7Lqn4ZgFKp041E0iY4ewxpyFzafYZ5~kTEI57bmuRFBSOdqsYEjUoNdVrAHOOJtvEYaHAI3dZgee7vnA8tW93C8sGr4KlFIki1ZsifdEh8ewlNEysGjElFOaVDPK860kZ-OZwkykp6C5CT1Tvdtdr08e~nqPwb2Fc0oWJogInuQuxhqbbLQCnmfqsRYM0Yx4iB-hSaumVRWWJh8wIXhItFJ753Ac9l0QMB9HwxumYU4A__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/abe6/4e38/1c968fef4be6d3364919e5c337a826ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcDva5admwK8JlD2dIe4Mwx4bT10cMz2MyC9Uv3tjQeZ0VsU9LAP05eSdly~IGphSqAHwGCLk4U6ayvT86n5GEKn5Z6jPFdG6laenUQ3yiCAzKryaMLSypHe0lHPnjB8~8uNuluPwxqahyae4Rk-XsEOiowlB8IAqJpkcf225SwRm5xfM6A2xOCvxAdvUXY1wsmt~0sDPXs55g~XZukEYyeO5sueoq0VvSvp0zOI4t621haoXt4S9Uxk8igCmDSQa9~2B5iG29ow08zYLUPiUhaUZ79OwoS7X0LbjUAhwMkuCVaD6CvZpoenPySy9ay5QscHiReK8L8rDtYhHJVthQ__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/2736/c939/6b4b1de683c0476349143a334d80a5cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pP4wo01nTHgUOHV7oV1CpcMqwUUwKY57Mli7ZSdnk~7XuIDGD4nwAK2mSxgkEFvye0pK3deNfAzWlLp2cyBPWbXfAGDMb985Dc7BveDVazXAlLhNUYW6DrGy14-de8lQfuW7uPHxWxJJWW-rlFsHbUtpr7oLOCMIoDziO4uHO-yvLrR3KrYj9VuvipP9230A7Vc9u8loIeg5hq~~jYfzAa9zMIDaGwszNU0aJUvOvlqEMdZnAmuQ0DBXWkSm5LjIQX1vlCq10QcPOOAyc0voGUi2ldacrOoxfIZIns7BCUwm7gBZRJ70gOSPLq57CDGWgoSkTf6Jms8oKPYUNrVgBw__",
      },
    ],
  },
  {
    id: "2",
    title: "Brown jacket",
    brand: "ABC 15",
    price: 1189,
    rating: 3.78,
    reviewsCount: 10,
    currency: "$",
    colors: ["#F9A8D4", "#EF4444", "#F59E0B", "#E5E7EB"],
    sizes: [
      {
        name: "Small",
        description: "120 by 18 inches",
      },
      {
        name: "Medium",
        description: "210 by 50 inches",
      },
    ],
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/fe60/9470/201e88daf923c654ead524199478ff75?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPKAujKnjbQ2IA6PxjMbaA-XFFBt3xY7v6DjMFwnTvIoU6lMQcC~-4zVj3D4fyoP6cj8FBaMk7MAKouFdj-46KDhdOyYJz5RAtvHs8l1-DDw1R5LngQoBlzVuCV~-IwOIDZ7SG~6PvkjkwZQIu~BYeHGYAaNm3VvROf9EwS1LXzCB5-AS1Vu1niMkIliO-w2C-6X~aI7DyfG-J6DA8QU7zg9CTjHkR34KXMzW7U6hagvB4SRyHvrPulXov~dw8L4u7P59Gorxx7WT~zqAPXsH2l2oqeFP7Oxc204rCD7t9kkKwbIo1SaIR-jHJkTYbdWFPr3hgmD6~SlYy6Q6ECiCw__",
    imageAlt: "",
    slug: "black-shirt",
    images: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/88b5/a615/4899f7ff5e0fb8c4e283a02c8251b73f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDG8J0IlWvbIYI45jUeyooXtcPiFJ3rP5wh5U72OdGsPCIq-OCtzLzJI4q6gZIxeIvNU6pvWu2yA75MNuEktWipISWIKv05UFVlRwUm40d7Lqn4ZgFKp041E0iY4ewxpyFzafYZ5~kTEI57bmuRFBSOdqsYEjUoNdVrAHOOJtvEYaHAI3dZgee7vnA8tW93C8sGr4KlFIki1ZsifdEh8ewlNEysGjElFOaVDPK860kZ-OZwkykp6C5CT1Tvdtdr08e~nqPwb2Fc0oWJogInuQuxhqbbLQCnmfqsRYM0Yx4iB-hSaumVRWWJh8wIXhItFJ753Ac9l0QMB9HwxumYU4A__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/abe6/4e38/1c968fef4be6d3364919e5c337a826ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcDva5admwK8JlD2dIe4Mwx4bT10cMz2MyC9Uv3tjQeZ0VsU9LAP05eSdly~IGphSqAHwGCLk4U6ayvT86n5GEKn5Z6jPFdG6laenUQ3yiCAzKryaMLSypHe0lHPnjB8~8uNuluPwxqahyae4Rk-XsEOiowlB8IAqJpkcf225SwRm5xfM6A2xOCvxAdvUXY1wsmt~0sDPXs55g~XZukEYyeO5sueoq0VvSvp0zOI4t621haoXt4S9Uxk8igCmDSQa9~2B5iG29ow08zYLUPiUhaUZ79OwoS7X0LbjUAhwMkuCVaD6CvZpoenPySy9ay5QscHiReK8L8rDtYhHJVthQ__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/2736/c939/6b4b1de683c0476349143a334d80a5cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pP4wo01nTHgUOHV7oV1CpcMqwUUwKY57Mli7ZSdnk~7XuIDGD4nwAK2mSxgkEFvye0pK3deNfAzWlLp2cyBPWbXfAGDMb985Dc7BveDVazXAlLhNUYW6DrGy14-de8lQfuW7uPHxWxJJWW-rlFsHbUtpr7oLOCMIoDziO4uHO-yvLrR3KrYj9VuvipP9230A7Vc9u8loIeg5hq~~jYfzAa9zMIDaGwszNU0aJUvOvlqEMdZnAmuQ0DBXWkSm5LjIQX1vlCq10QcPOOAyc0voGUi2ldacrOoxfIZIns7BCUwm7gBZRJ70gOSPLq57CDGWgoSkTf6Jms8oKPYUNrVgBw__",
      },
    ],
  },
  {
    id: "3",
    title: "Black t-shirt",
    brand: "RMX-900",
    price: 599,
    rating: 4.5451,
    reviewsCount: 18,
    currency: "$",
    colors: ["#F9A8D4", "#EF4444", "#F59E0B", "#E5E7EB"],
    sizes: [
      {
        name: "Small",
        description: "120 by 18 inches",
      },
      {
        name: "Medium",
        description: "210 by 50 inches",
      },
    ],
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/f936/051a/01f62c2c2744e2e40741ce18652e3359?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAh9PguEuVcRu4WymHlJ9~YifdnvRFBVBXNp~nM7C~OnUG9ZtMceo5KzaCFTpj2MgwfoV1zAFyf0mSBCpTtTlNyCxvWU4kF6KoKtnBHnWWLJPxHNLjJMF-Fdu-KO8WigX4X4mt9YcnbVQV4Bw8anljZBCD-d~StW7vQdrei0mUoXqIjwlof6p2uyHkeFa2VFuOIcAQTXYKOEFjBZDxkxN3UZHy5t-zo6hG6H3yw-808LKPU50BRHTbt8BhkiHquvZWE1K82NXj8xlN~c7i~GJISofxYf9U2Dxz6QCwaop9Wv53KhYo0aful6U8omuLiQdK6ZHB~r3JrdTyKMczd8FQ__",
    imageAlt: "",
    slug: "black-shirt",
    images: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/88b5/a615/4899f7ff5e0fb8c4e283a02c8251b73f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDG8J0IlWvbIYI45jUeyooXtcPiFJ3rP5wh5U72OdGsPCIq-OCtzLzJI4q6gZIxeIvNU6pvWu2yA75MNuEktWipISWIKv05UFVlRwUm40d7Lqn4ZgFKp041E0iY4ewxpyFzafYZ5~kTEI57bmuRFBSOdqsYEjUoNdVrAHOOJtvEYaHAI3dZgee7vnA8tW93C8sGr4KlFIki1ZsifdEh8ewlNEysGjElFOaVDPK860kZ-OZwkykp6C5CT1Tvdtdr08e~nqPwb2Fc0oWJogInuQuxhqbbLQCnmfqsRYM0Yx4iB-hSaumVRWWJh8wIXhItFJ753Ac9l0QMB9HwxumYU4A__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/abe6/4e38/1c968fef4be6d3364919e5c337a826ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcDva5admwK8JlD2dIe4Mwx4bT10cMz2MyC9Uv3tjQeZ0VsU9LAP05eSdly~IGphSqAHwGCLk4U6ayvT86n5GEKn5Z6jPFdG6laenUQ3yiCAzKryaMLSypHe0lHPnjB8~8uNuluPwxqahyae4Rk-XsEOiowlB8IAqJpkcf225SwRm5xfM6A2xOCvxAdvUXY1wsmt~0sDPXs55g~XZukEYyeO5sueoq0VvSvp0zOI4t621haoXt4S9Uxk8igCmDSQa9~2B5iG29ow08zYLUPiUhaUZ79OwoS7X0LbjUAhwMkuCVaD6CvZpoenPySy9ay5QscHiReK8L8rDtYhHJVthQ__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/2736/c939/6b4b1de683c0476349143a334d80a5cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pP4wo01nTHgUOHV7oV1CpcMqwUUwKY57Mli7ZSdnk~7XuIDGD4nwAK2mSxgkEFvye0pK3deNfAzWlLp2cyBPWbXfAGDMb985Dc7BveDVazXAlLhNUYW6DrGy14-de8lQfuW7uPHxWxJJWW-rlFsHbUtpr7oLOCMIoDziO4uHO-yvLrR3KrYj9VuvipP9230A7Vc9u8loIeg5hq~~jYfzAa9zMIDaGwszNU0aJUvOvlqEMdZnAmuQ0DBXWkSm5LjIQX1vlCq10QcPOOAyc0voGUi2ldacrOoxfIZIns7BCUwm7gBZRJ70gOSPLq57CDGWgoSkTf6Jms8oKPYUNrVgBw__",
      },
    ],
  },
  {
    id: "4",
    title: "Black shirt",
    brand: "RMX-900",
    price: 2900,
    rating: 3.8978745,
    reviewsCount: 8,
    currency: "$",
    isNew: true,
    colors: ["#F9A8D4", "#EF4444", "#F59E0B", "#E5E7EB"],
    sizes: [
      {
        name: "Small",
        description: "120 by 18 inches",
      },
      {
        name: "Medium",
        description: "210 by 50 inches",
      },
    ],
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/a487/9779/6a32efe82d83936051af3419545e70f2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odWcd2lzkVdhJgG3owVg9lz10MKAvyLwFsWyRYTJe6YLWMg4~FLer8beSfUgPNg2Ho~5kXxvPx16CDqc4rrYoBywf75-3bPuqfFk2TRWVaNki-2kZj~k-CFJf5SwAXPBlhtmY11Mrdutmm7yNxhsR7ZmzHmyJQNjg-Zb0-Z~h-osC31Qbp7qi-kmJ23D8zUmdWkz~rj5pNfmY96eDyTxIUoUB1ABsGxPSA8ss~HCjNOkHBFLtqSYHWfDd5WUJrytQRQsAqGypAgG2VoJGVR3x5ir~Om4DVx38VKNja~rXju32ZqxAS27Xawm2HS~NBhrCHvL-QxSB~Wv4Xju076b8w__",
    imageAlt: "",
    slug: "black-shirt",
    images: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/88b5/a615/4899f7ff5e0fb8c4e283a02c8251b73f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDG8J0IlWvbIYI45jUeyooXtcPiFJ3rP5wh5U72OdGsPCIq-OCtzLzJI4q6gZIxeIvNU6pvWu2yA75MNuEktWipISWIKv05UFVlRwUm40d7Lqn4ZgFKp041E0iY4ewxpyFzafYZ5~kTEI57bmuRFBSOdqsYEjUoNdVrAHOOJtvEYaHAI3dZgee7vnA8tW93C8sGr4KlFIki1ZsifdEh8ewlNEysGjElFOaVDPK860kZ-OZwkykp6C5CT1Tvdtdr08e~nqPwb2Fc0oWJogInuQuxhqbbLQCnmfqsRYM0Yx4iB-hSaumVRWWJh8wIXhItFJ753Ac9l0QMB9HwxumYU4A__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/abe6/4e38/1c968fef4be6d3364919e5c337a826ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcDva5admwK8JlD2dIe4Mwx4bT10cMz2MyC9Uv3tjQeZ0VsU9LAP05eSdly~IGphSqAHwGCLk4U6ayvT86n5GEKn5Z6jPFdG6laenUQ3yiCAzKryaMLSypHe0lHPnjB8~8uNuluPwxqahyae4Rk-XsEOiowlB8IAqJpkcf225SwRm5xfM6A2xOCvxAdvUXY1wsmt~0sDPXs55g~XZukEYyeO5sueoq0VvSvp0zOI4t621haoXt4S9Uxk8igCmDSQa9~2B5iG29ow08zYLUPiUhaUZ79OwoS7X0LbjUAhwMkuCVaD6CvZpoenPySy9ay5QscHiReK8L8rDtYhHJVthQ__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/2736/c939/6b4b1de683c0476349143a334d80a5cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pP4wo01nTHgUOHV7oV1CpcMqwUUwKY57Mli7ZSdnk~7XuIDGD4nwAK2mSxgkEFvye0pK3deNfAzWlLp2cyBPWbXfAGDMb985Dc7BveDVazXAlLhNUYW6DrGy14-de8lQfuW7uPHxWxJJWW-rlFsHbUtpr7oLOCMIoDziO4uHO-yvLrR3KrYj9VuvipP9230A7Vc9u8loIeg5hq~~jYfzAa9zMIDaGwszNU0aJUvOvlqEMdZnAmuQ0DBXWkSm5LjIQX1vlCq10QcPOOAyc0voGUi2ldacrOoxfIZIns7BCUwm7gBZRJ70gOSPLq57CDGWgoSkTf6Jms8oKPYUNrVgBw__",
      },
    ],
  },
  {
    id: "5",
    title: "Black shirt",
    brand: "RMX-900",
    price: 7489,
    rating: 5,
    reviewsCount: 10,
    currency: "$",
    isNew: true,
    colors: ["#F9A8D4", "#EF4444", "#F59E0B", "#E5E7EB"],
    sizes: [
      {
        name: "Small",
        description: "120 by 18 inches",
      },
      {
        name: "Medium",
        description: "210 by 50 inches",
      },
    ],
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/ee8d/e8fc/842a3993577ec453c5b71d042a286a74?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBCo1AeLOLvqWxcf0eIlZO6GVbhrMmB9tV~Rw1bMt1DuhGlcxOwjkvIRNmSnXxN8NOUqfT62ZFlZ9IOMlvozVGhP0GeJIznY-wc6f-Z90dajbkh0HEM39l2seRN4~YsUsEaqDCZ5mxhqTtKBB1i0DKCDLHeLy30ireSIO7oOUZciDA6SlJF3iJFXgQCHzLfAd2-YIjXDT2A3jatyqCpM6RA~SScVbQsCNG9v1VieAFX7aUiQgFJy-JHFvUK6wVdNaC7NGHHzXRKmAStvKz3UqtExS3su2JFldZ8vKLblWfl12tNbkhyr4lCq1OH6sgJ-4P7cOit02dOrFdNio280pA__",
    imageAlt: "",
    slug: "black-shirt",
    images: [
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/88b5/a615/4899f7ff5e0fb8c4e283a02c8251b73f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDG8J0IlWvbIYI45jUeyooXtcPiFJ3rP5wh5U72OdGsPCIq-OCtzLzJI4q6gZIxeIvNU6pvWu2yA75MNuEktWipISWIKv05UFVlRwUm40d7Lqn4ZgFKp041E0iY4ewxpyFzafYZ5~kTEI57bmuRFBSOdqsYEjUoNdVrAHOOJtvEYaHAI3dZgee7vnA8tW93C8sGr4KlFIki1ZsifdEh8ewlNEysGjElFOaVDPK860kZ-OZwkykp6C5CT1Tvdtdr08e~nqPwb2Fc0oWJogInuQuxhqbbLQCnmfqsRYM0Yx4iB-hSaumVRWWJh8wIXhItFJ753Ac9l0QMB9HwxumYU4A__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/abe6/4e38/1c968fef4be6d3364919e5c337a826ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TcDva5admwK8JlD2dIe4Mwx4bT10cMz2MyC9Uv3tjQeZ0VsU9LAP05eSdly~IGphSqAHwGCLk4U6ayvT86n5GEKn5Z6jPFdG6laenUQ3yiCAzKryaMLSypHe0lHPnjB8~8uNuluPwxqahyae4Rk-XsEOiowlB8IAqJpkcf225SwRm5xfM6A2xOCvxAdvUXY1wsmt~0sDPXs55g~XZukEYyeO5sueoq0VvSvp0zOI4t621haoXt4S9Uxk8igCmDSQa9~2B5iG29ow08zYLUPiUhaUZ79OwoS7X0LbjUAhwMkuCVaD6CvZpoenPySy9ay5QscHiReK8L8rDtYhHJVthQ__",
      },
      {
        imageSrc:
          "https://s3-alpha-sig.figma.com/img/2736/c939/6b4b1de683c0476349143a334d80a5cf?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pP4wo01nTHgUOHV7oV1CpcMqwUUwKY57Mli7ZSdnk~7XuIDGD4nwAK2mSxgkEFvye0pK3deNfAzWlLp2cyBPWbXfAGDMb985Dc7BveDVazXAlLhNUYW6DrGy14-de8lQfuW7uPHxWxJJWW-rlFsHbUtpr7oLOCMIoDziO4uHO-yvLrR3KrYj9VuvipP9230A7Vc9u8loIeg5hq~~jYfzAa9zMIDaGwszNU0aJUvOvlqEMdZnAmuQ0DBXWkSm5LjIQX1vlCq10QcPOOAyc0voGUi2ldacrOoxfIZIns7BCUwm7gBZRJ70gOSPLq57CDGWgoSkTf6Jms8oKPYUNrVgBw__",
      },
    ],
  },
];
