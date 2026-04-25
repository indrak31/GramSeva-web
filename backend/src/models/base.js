export const serialiseOptions = {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    return ret;
  },
};

export function applyJsonTransform(schema) {
  schema.set("toJSON", serialiseOptions);
  schema.set("toObject", serialiseOptions);
}
