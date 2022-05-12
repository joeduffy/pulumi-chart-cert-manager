// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

import * as pulumiKubernetes from "@pulumi/kubernetes";

/**
 * Automates the management and issuance of TLS certificates from various issuing sources within Kubernetes
 */
export class CertManager extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'kubernetes-cert-manager:index:CertManager';

    /**
     * Returns true if the given object is an instance of CertManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertManager.__pulumiType;
    }

    /**
     * Detailed information about the status of the underlying Helm deployment.
     */
    public /*out*/ readonly status!: pulumi.Output<outputs.ReleaseStatus>;

    /**
     * Create a CertManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CertManagerArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["affinity"] = args ? args.affinity : undefined;
            resourceInputs["cainjector"] = args ? args.cainjector : undefined;
            resourceInputs["clusterResourceNamespace"] = args ? args.clusterResourceNamespace : undefined;
            resourceInputs["containerSecurityContext"] = args ? args.containerSecurityContext : undefined;
            resourceInputs["deploymentAnnotations"] = args ? args.deploymentAnnotations : undefined;
            resourceInputs["extraArgs"] = args ? args.extraArgs : undefined;
            resourceInputs["extraEnv"] = args ? args.extraEnv : undefined;
            resourceInputs["extraVolumeMounts"] = args ? args.extraVolumeMounts : undefined;
            resourceInputs["extraVolumes"] = args ? args.extraVolumes : undefined;
            resourceInputs["featureGates"] = args ? args.featureGates : undefined;
            resourceInputs["global"] = args ? args.global : undefined;
            resourceInputs["helmOptions"] = args ? args.helmOptions : undefined;
            resourceInputs["http_proxy"] = args ? args.http_proxy : undefined;
            resourceInputs["https_proxy"] = args ? args.https_proxy : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["ingressShim"] = args ? args.ingressShim : undefined;
            resourceInputs["installCRDs"] = args ? args.installCRDs : undefined;
            resourceInputs["no_proxy"] = args ? args.no_proxy : undefined;
            resourceInputs["nodeSelector"] = args ? args.nodeSelector : undefined;
            resourceInputs["podAnnotations"] = args ? args.podAnnotations : undefined;
            resourceInputs["podDnsConfig"] = args ? args.podDnsConfig : undefined;
            resourceInputs["podDnsPolicy"] = args ? args.podDnsPolicy : undefined;
            resourceInputs["podLabels"] = args ? args.podLabels : undefined;
            resourceInputs["prometheus"] = args ? args.prometheus : undefined;
            resourceInputs["replicaCount"] = args ? args.replicaCount : undefined;
            resourceInputs["resources"] = args ? args.resources : undefined;
            resourceInputs["securityContext"] = args ? args.securityContext : undefined;
            resourceInputs["serviceAccount"] = args ? args.serviceAccount : undefined;
            resourceInputs["serviceAnnotations"] = args ? args.serviceAnnotations : undefined;
            resourceInputs["serviceLabels"] = args ? args.serviceLabels : undefined;
            resourceInputs["startupapicheck"] = args ? args.startupapicheck : undefined;
            resourceInputs["strategy"] = args ? args.strategy : undefined;
            resourceInputs["tolerations"] = args ? args.tolerations : undefined;
            resourceInputs["webhook"] = args ? args.webhook : undefined;
            resourceInputs["status"] = undefined /*out*/;
        } else {
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CertManager.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a CertManager resource.
 */
export interface CertManagerArgs {
    affinity?: pulumi.Input<pulumiKubernetes.types.input.core.v1.Affinity>;
    cainjector?: pulumi.Input<inputs.CertManagerCaInjectorArgs>;
    /**
     * Override the namespace used to store DNS provider credentials etc. for ClusterIssuer resources. By default, the same namespace as cert-manager is deployed within is used. This namespace will not be automatically created by the Helm chart.
     */
    clusterResourceNamespace?: pulumi.Input<string>;
    /**
     * Container Security Context to be set on the controller component container. ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    containerSecurityContext?: pulumi.Input<pulumiKubernetes.types.input.core.v1.SecurityContext>;
    /**
     * Optional additional annotations to add to the controller Deployment
     */
    deploymentAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional additional arguments.
     */
    extraArgs?: pulumi.Input<pulumi.Input<string>[]>;
    extraEnv?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.EnvVar>[]>;
    extraVolumeMounts?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.VolumeMount>[]>;
    extraVolumes?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Volume>[]>;
    /**
     * Comma separated list of feature gates that should be enabled on the controller pod.
     */
    featureGates?: pulumi.Input<string>;
    global?: pulumi.Input<inputs.CertManagerGlobalArgs>;
    /**
     * HelmOptions is an escape hatch that lets the end user control any aspect of the Helm deployment. This exposes the entirety of the underlying Helm Release component args.
     */
    helmOptions?: pulumi.Input<inputs.ReleaseArgs>;
    http_proxy?: pulumi.Input<string>;
    https_proxy?: pulumi.Input<string>;
    image?: pulumi.Input<inputs.CertManagerImageArgs>;
    ingressShim?: pulumi.Input<inputs.CertManagerIngressShimArgs>;
    installCRDs?: pulumi.Input<boolean>;
    no_proxy?: pulumi.Input<pulumi.Input<string>[]>;
    nodeSelector?: pulumi.Input<pulumiKubernetes.types.input.core.v1.NodeSelector>;
    /**
     * Optional additional annotations to add to the controller Pods
     */
    podAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    podDnsConfig?: pulumi.Input<pulumiKubernetes.types.input.core.v1.PodDNSConfig>;
    /**
     * Optional DNS settings, useful if you have a public and private DNS zone for the same domain on Route 53. What follows is an example of ensuring cert-manager can access an ingress or DNS TXT records at all times. NOTE: This requires Kubernetes 1.10 or `CustomPodDNS` feature gate enabled for the cluster to work.
     */
    podDnsPolicy?: pulumi.Input<string>;
    podLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    prometheus?: pulumi.Input<inputs.CertManagerPrometheusArgs>;
    replicaCount?: pulumi.Input<number>;
    resources?: pulumi.Input<pulumiKubernetes.types.input.core.v1.ResourceRequirements>;
    /**
     * Pod Security Context. ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    securityContext?: pulumi.Input<pulumiKubernetes.types.input.core.v1.PodSecurityContext>;
    serviceAccount?: pulumi.Input<inputs.CertManagerServiceAccountArgs>;
    /**
     * Optional additional annotations to add to the controller service
     */
    serviceAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional additional labels to add to the controller Service
     */
    serviceLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    startupapicheck?: pulumi.Input<inputs.CertManagerStartupAPICheckArgs>;
    strategy?: pulumi.Input<pulumiKubernetes.types.input.apps.v1.DeploymentStrategy>;
    tolerations?: pulumi.Input<pulumi.Input<pulumiKubernetes.types.input.core.v1.Toleration>[]>;
    webhook?: pulumi.Input<inputs.CertManagerWebhookArgs>;
}
