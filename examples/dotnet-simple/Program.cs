using System.Collections.Generic;
using Pulumi;
using Pulumi.PkProvider;

return await Deployment.RunAsync(() =>
{
   // Add your resources here
   // e.g. var resource = new Resource("name", new ResourceArgs { });


   var thing = new Pulumi.PkProvider.Random("random", new RandomArgs()
   {
      Length = 5
   });

   // Export outputs here
   return new Dictionary<string, object?>
   {
      ["outputKey"] = "outputValue"
   };
});
