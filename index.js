var mixed = {
    default: '${path} geçerli değil',
    required: '${path} zorunlu alandır',
    oneOf: '${path} değeri , örnekteki değerler gibi olmalıdır: ${values}',
    notOneOf: '${path} değeri, örnekteki değerler gibi olmamalıdır: ${values}',
};

exports.mixed = mixed;

var string = {
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

exports.string = string;

var number = {
    min: '${path} değeri ${min} değerinden büyük veya eşit olmalıdır',
    max: '${path} değeri ${max} değerinden  küçük veya eşit olmalıdır',
    lessThan: '${path} değeri  ${less} değerinden daha az olmalıdır',
    moreThan: '${path} değeri  ${more} değerinden daha büyük olmalıdır',
    notEqual: '${path} değeri ${notEqual} değeri ile eşit olamaz',
    positive: '${path} pozitif bir değer olmalıdır',
    negative: '${path} negatif bir değer olmalıdır',
    integer: '${path} değeri integer olmalıdır.',
};

exports.number = number;

var date = {
    min: '${path} tarihi ${min} tarihinden sonra olmalıdır',
    max: '${path} tarihi ${max} tarihinden önce olmalıdır',
};

exports.date = date;

var boolean = {};

exports.boolean = boolean;

var object = {
    noUnknown: '${path} için belirlenemeyen key değerleri: ${unknown}',
};

exports.object = object;

var array = {
    min: '${path} array minimum ${min} değer almalıdır',
    max: '${path} array değerinden daha az veya eşit değer almalıdır',
};
exports.array = array;

module.exports = {
    mixed,
    string,
    number,
    date,
    object,
    array,
    boolean,
};
