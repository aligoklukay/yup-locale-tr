export let mixed = {
    default: '${path} geçerli değil',
    required: '${path} zorunlu alandır',
    oneOf: '${path} değeri , örnekteki değerler gibi olmalıdır: ${values}',
    notOneOf: '${path} değeri, örnekteki değerler gibi olmamalıdır: ${values}',
};

export let string = {
    length: '${path} değeri ${length} karakter olmalıdır',
    min: '${path} değeri minimum ${min} karakter olmalıdır',
    max: '${path} değeri maksimum ${max} karakter olmalıdır',
    matches: '${path} değerlerine uymalıdır: "${regex}"',
    email: '${path} geçerli bir email adresi olmalıdır',
    url: '${path} geçerli bir URL olmalıdır',
    uuid: '${path} geçerli bir UUID olmalıdır',
    trim: '${path} kısaltılmış string olmalıdır',
    lowercase: '${path} küçük harf olmalıdır',
    uppercase: '${path} büyük harf olmalıdır',
};

export let number = {
    min: '${path} değeri ${min} değerinden büyük veya eşit olmalıdır',
    max: '${path} değeri ${max} değerinden  küçük veya eşit olmalıdır',
    lessThan: '${path} değeri  ${less} değerinden daha az olmalıdır',
    moreThan: '${path} değeri  ${more} değerinden daha büyük olmalıdır',
    notEqual: '${path} değeri ${notEqual} değeri ile eşit olamaz',
    positive: '${path} pozitif bir değer olmalıdır',
    negative: '${path} negatif bir değer olmalıdır',
    integer: '${path} değeri integer olmalıdır.',
};

export let date = {
    min: '${path} tarihi ${min} tarihinden sonra olmalıdır',
    max: '${path} tarihi ${max} tarihinden önce olmalıdır',
};


export let boolean = {};

export let object = {
    noUnknown: '${path} için belirlenemeyen key değerleri: ${unknown}',
};

export let array = {
    min: '${path} array minimum ${min} değer almalıdır',
    max: '${path} array değerinden daha az veya eşit değer almalıdır',
};

export default {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
};



