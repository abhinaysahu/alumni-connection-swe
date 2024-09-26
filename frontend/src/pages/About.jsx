import Header from "../components/Header";

export default function About(){
  return <>
    <Header name={"About"}></Header>
   <div className="container  mx-auto mt-10 my-auto px-10 flex-grow">
  <div className="flex justify-center">
    <div className="flex-shrink-0">
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-blue-700">Who We Are</p>
        <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
      </div>
    </div>
  </div>
  <div className="flex justify-center space-x-4 flex-wrap">
    <div className="flex-grow sm:flex-grow-0 sm:w-1/2 lg:w-1/3 xl:w-full">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <p className="text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id distinctio ducimus vitae atque quae. Voluptatum
          culpa atque, nemo repellendus hic asperiores laborum explicabo! Saepe neque velit distinctio illum ullam ex ipsa,
          nihil, exercitationem ipsum voluptatibus illo sunt deleniti a, sapiente id aperiam sint temporibus accusamus eveniet.
          Cumque placeat, vero assumenda modi eaque ex fugit facilis commodi, maiores itaque, delectus perferendis! Illo ad
          itaque quia minima fuga, totam ipsum facilis. Ex culpa laboriosam consectetur accusamus sint, suscipit atque voluptate
          officiis nihil ratione numquam voluptatum nemo omnis! Atque pariatur autem commodi.
        </p>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id distinctio ducimus vitae atque quae. Voluptatum
          culpa atque, nemo repellendus hic asperiores laborum explicabo! Saepe neque velit distinctio illum ullam ex ipsa,
          nihil, exercitationem ipsum voluptatibus illo sunt deleniti a, sapiente id aperiam sint temporibus accusamus eveniet.
          Cumque placeat, vero assumenda modi eaque ex fugit facilis commodi, maiores itaque, delectus perferendis! Illo ad
          itaque quia minima fuga, totam ipsum facilis. Ex culpa laboriosam consectetur accusamus sint, suscipit atque voluptate
          officiis nihil ratione numquam voluptatum nemo omnis! Atque pariatur autem commodi.
        </p>
      </div>
    </div>
  </div>
</div>

  </>
}